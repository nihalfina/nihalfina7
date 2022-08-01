const _ = require('lodash')
var registerDb = require('./tables/registrationSchema');
var otpDb = require('./tables/otpSchema')
const bcrypt = require("bcrypt");
const moment = require('moment');
const { login, register } = require('../../helpers/validation_Schema');
var mailer = require('../../libs/otp');
var Otp = require('../../libs/generateOtp');
const { signAccessToken, signRefreshToken } = require('../../helpers/jwt_helper')
var path = require('path');
var XLSX = require('xlsx');
var multer = require('multer');


class Service {

  async registerAndgetOtp(params) {
    try {
      const result = await register.validateAsync(params);
      const emailresult = await new Service().getemail(params.email);
      const phoneresult = await new Service().getPhone(params.phone);

      if (emailresult.length !== 0) {
        return "Email Id already exit"
      } else if (phoneresult.length !== 0) {
        return "Phone number already exit"
      } else if (result) {
        const otp = Otp
        mailer({
          from: process.env.EMAIL_USERNAME,
          to: result.email,
          subject: 'Verify your account',
          text: `Your OTP is ${otp}`
        });
        const emailResult = {
          email: result.email,
          otp: otp
        }
        const data = await new Service().findAvailable(emailResult)
        if (!_.isEmpty(data)) {
          const Update_otp = await new Service().updateOtp(emailResult)
          return `OTP Send to ${Update_otp.email}`
        } else {
          const store = await new Service().saveData(result)
          const storage = await new Service().saveDatas(store, result)
          const datas = await new Service().createOtpSend(emailResult)
          return `OTP Send to ${datas.email}`
        }
      } else {
        return "Registration Failed"
      }

    } catch (error) {
      return error
    }
  }


  async verifyOtpAndRegister(id, details) {
    try {
      const otpData = details.otp
      if (otpData) {
        const result = id
        const data = await new Service().getRegisterUser(result)
        const recorded_Time = data[0].updatedAt.getMinutes() + 2
        var currentTime = moment(new Date()).minutes();
        if (currentTime <= recorded_Time) {
          if (data[0].otp === otpData) {
            const data_1 = await new Service().createRegisterUser(result)
            return "verification is Success Your Account have been Generated"
          } else {
            return "Given OTP is Wrong"
          }
        } else {
          return "OTP Expaired"
        }
      } else {
        return "failed to generate"
      }
    } catch (error) {
      return error
    }
  }


  // User Login

  async userLogIn(params) {
    try {
      const result = await login.validateAsync(params)
      const data = await new Service().getuserLogIn(result.email)
      const password_db = data[0]
      if (!_.isEmpty(password_db.password)) {
        const validPassword = await bcrypt.compare(result.password, password_db.password)
        const accessToken = await signAccessToken(password_db.email);
        const refreshToken = await signRefreshToken(password_db.email)
        console.log("refreshToken", refreshToken)
        if (validPassword) {
          return { message: "User Login Success", RefreshToken: { refreshToken }, AccessToken: { accessToken } }
        } else {
          return "password wrong"
        }
      } else {
        return "No User Found"
      }
    } catch (error) {

    }
  }

  async findAvailable(params) {
    try {
      const data = otpDb.find({ $and: [{ email: params.email }, { status: 'ACTIVE' }] }).sort({ createdAt: -1 }).lean().exec()
      return data
    } catch (error) {
      return error
    }
  }

  async updateOtp(params) {
    try {
      const result = otpDb.findOneAndUpdate({ email: { $eq: params.email } }, { $set: { otp: params.otp } }).sort({ createdAt: -1 }).lean().exec()
      return result
    } catch (error) {
      return e
    }
  }

  async createOtpSend(params) {
    const data = new otpDb(params)
    return data.save().catch((e) => {
      return e
    })
  }

  async getRegisterUser(params) {
    try {
      const result = otpDb.find({ $and: [{ email: params }, { status: 'ACTIVE' }] }).sort({ createdAt: -1 }).lean().exec()
      return result
    } catch (e) {
      return e
    }
  }

  async createRegisterUser(params) {
    try {
      const id = params
      const result = otpDb.findOneAndUpdate({ email: { $eq: id } }, { $set: { status: "DELETE" } }).sort({ createdAt: -1 }).lean().exec()
      const result_2 = registerDb.findOneAndUpdate({ email: { $eq: id } }, { $set: { status: "ACTIVE" } }).sort({ createdAt: -1 }).lean().exec()
      return result
    } catch (e) {
      return e
    }
  }

  async getemail(params) {
    try {
      const result = registerDb.find({ $and: [{ email: params }, { status: 'ACTIVE' }] }).sort({ createdAt: -1 }).lean().exec()
      return result
    } catch (e) {
      return e
    }
  }

  async getPhone(params) {
    try {
      const result = registerDb.find({ $and: [{ phone: params }, { status: 'ACTIVE' }] }).sort({ createdAt: -1 }).lean().exec()
      return result
    } catch (e) {
      return e
    }
  }

  async saveData(params) {
    try {
      const data = new registerDb(params)
      const check = registerDb.find({ $and: [{ email: { $eq: params.email } }, { status: { $eq: 'INACTIVE' } }] }).sort({ createdAt: -1 }).lean().exec()
      return check
    } catch (error) {
      return e
    }
  }


  async saveDatas(params, datas) {
    try {
      const salt = await bcrypt.genSalt(10);
      datas.password = await bcrypt.hashSync(datas.password, salt);
      datas.confirmPassword = await bcrypt.hashSync(datas.confirmPassword, salt);
      const verify = params.length
      if ((verify === 0) && (params.password === params.confirmPassword)) {
        return registerDb(datas).save()
      } else {
        return datas
      }
    } catch (error) {
      return e
    }
  }

  //   Get Data.....

  async getRegisterAccount() {
    try {
      const result = registerDb.find({ status: "ACTIVE" }).sort({ createdAt: -1 }).lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  // Get by ID

  async getRegisterAccountById(param) {
    return registerDb.find({ $and: [{ _id: param }, { status: "ACTIVE" }] }).sort({ createdAt: -1 }).lean().catch((e) => {
      return e
    })
  }

  // Update an account.....

  async updateRegisterAccountById(id, params) {
    return registerDb.findOneAndUpdate(id, params).sort({ createdAt: -1 }).lean().catch((e) => {
      return e
    })
  }

  // delete an account.....

  async deleteRegisterAccountById(id) {
    return registerDb.findOneAndUpdate({ _id: { $eq: id } }, { $set: { status: "DELETE" } }).sort({ createdAt: -1 }).lean().catch((e) => {
      return e
    })
  }


  async getuserLogIn(params) {
    try {
      return registerDb.find({ $and: [{ email: params }, { status: 'ACTIVE' }] }).sort({ createdAt: -1 }).lean().exec()
    } catch (error) {
      return error
    }
  }
}

const Services = new Service()

module.exports = { Services, Service }


