const createHttpError = require('http-errors');
const _ = require('lodash')
const { Services: service } = require('./service');
const { signAccessToken, signRefreshToken } = require('../../helpers/jwt_helper')
const { verifyRefreshToken } = require('../../helpers/verify_token')
var multer = require('multer');
const mimetype = require('mime-types')
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var XLSX = require('xlsx');


class Controller {
  async registerAndgetOtp(req, res) {
    try {
      const data = await service.registerAndgetOtp(req.body)
      console.log(data)
      if (!_.isEmpty(data)) {
        res.status(200).send({ message: data, status: "200" })
      } else {
        res.status(201).send({ message: "Failed to register", status: "201" })
      }
    } catch (error) {
      res.status(500).send({ message: "error accure while creating", status: "500" })
    }
  }


  async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.body
      const userId = await verifyRefreshToken(refreshToken)
      if (!_.isEmpty(userId)) {
        const accessToken = await signAccessToken(userId);
        const refreshTokens = await signRefreshToken(userId)
        res.status(200).send({ message: "show", status: "200", AccessToken: { accessToken }, RefreshTokens: { refreshTokens } })
      } else {
        res.status(201).send({ message: "Failed to register", status: "201" })
      }

    } catch (error) {
      next(error)
    }
  }

  // For OTP

  async verifyOtpAndRegister(req, res, next) {
    try {
      const { id } = req.params;
      const otpData = req.body;
      const data = await service.verifyOtpAndRegister(id, otpData)
      if (!_.isEmpty(data)) {
        res.status(200).send({ message: data, status: "200" })
      } else {
        res.status(201).send({ message: "Failed to register", status: "201" })
      }
    } catch (error) {
      res.status(500).send({ message: "error accure while Fetching", status: "500" })
    }
  }

  // get all the accounts

  async getRegisterAccount(req, res, next) {
    try {
      const data = await service.getRegisterAccount()
      const count = data.length
      if ((!_.isEmpty(data)) && (count > 0)) {
        res.status(200).send({ data: data, count: count, message: "Successfully Fetch all Datas", status: "200" })
      } else {
        res.status(201).send({ message: "Failed to fetch Datas", status: "201" })
      }
    } catch (error) {
      res.status(500).send({ message: "error accure while Fetching", status: "500" })
    }
  }


  // Get by ID........

  async getRegisterAccountById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await service.getRegisterAccountById(id)
      if (!_.isEmpty(data)) {
        res.status(200).send({ data: data, message: "Successfully Fetch Data for the Given ID", status: "200" })
      } else {
        res.status(201).send({ message: "No User Found to Fetch", status: "201" })
      }
    } catch (error) {
      next(error)
      res.status(500).send({ message: "error accure while Fetching", status: "500" })
    }
  }


  // Update an account.....

  async updateRegisterAccountById(req, res, next) {
    try {
      const { id } = req.params
      const datas = req.body
      const result = await service.updateRegisterAccountById({ _id: id }, datas)
      if (!_.isEmpty(result)) {
        res.status(200).send({ message: "Data Updated successfully", status: "200" })
      } else {
        res.status(201).send({ message: "Failed to Update Data", status: "201" })
      }
    } catch (error) {
      next(error)
      res.status(500).send({ message: "error accure while Updating", status: "500" })
    }
  }


  // Update an account.....

  async deleteRegisterAccountById(req, res, next) {
    try {
      const { id } = req.params
      const result = await service.deleteRegisterAccountById({ _id: id })
      if (!_.isEmpty(result)) {
        res.status(200).send({ message: "Data Deleted successfully", status: "200" })
      } else {
        res.status(500).send({ message: "Failed to Delete", status: "201" })
      }
    } catch (error) {
      next(error)
      res.status(500).send({ message: "error accure while Deleting", status: "500" })
    }
  }

  // user login

  async userLogIn(req, res, next) {
    try {
      const data = await service.userLogIn(req.body)
      if (!_.isEmpty(data)) {
        res.status(200).send({ message: data.message, status: "200", AccessToken: data.AccessToken, RefreshToken: data.RefreshToken })
      } else {
        res.status(201).send({ message: "Please Register Your Account", status: "201" })
      }
    } catch (error) {
      res.status(500).send({ message: "Please Register Your Account", status: "500" })
    }
  }


  // categories

  async createCategories(req, res, next) {
    try {
      const data = await service.createCategories(req.body)
      if (!_.isEmpty(data)) {
        res.status(200).send({ message: "Categorie Successfully Inserted", status: "200"})
      } else {
        res.status(201).send({ message: "Categorie Already Exits", status: "201" })
      }
    } catch (error) {
      res.status(500).send({ message: "Please Register Your Account", status: "500" })
    }
  }

}

module.exports = Controller