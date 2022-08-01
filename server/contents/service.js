const _ = require('lodash')
var categories = require('./schema/Categories/categoriesSchema')
var mobileBrands = require('./schema/aboutProduct/MobilePhones/Brands/mobileBrands')
var electronicsBrands = require('./schema/aboutProduct/Electronics/Brands/electronicsBrandSchema')
var groceriesBrands = require('./schema/aboutProduct/Groceries/Brands/groceriseBrandSchema')
var dressesBrands = require('./schema/aboutProduct/DressCloths/Brands/dressesBrandSchema')
var mobileProductName = require('./schema/aboutProduct/MobilePhones/Mobiles/mobilePhonesName')
var dressesProductName = require('./schema/aboutProduct/DressCloths/Bit_cloths/bit_clothsName')
var mobileProductDetails = require('./schema/aboutProduct/MobilePhones/Mobiles/mobilePhonesDetails')
var dressesProductDetails = require('./schema/aboutProduct/DressCloths/Bit_cloths/bit_clothsDetails')
var mobileImgDetails = require('./schema/aboutProduct/MobilePhones/Mobiles/mobilePhonesImgDetails')
var dressesImgDetails = require('./schema/aboutProduct/DressCloths/Bit_cloths/bit_clothsImgDetails')
var bitclothsDetails = require('./schema/aboutProduct/DressCloths/Bit_cloths/bit_clothsDetails')
var bitclothsNames = require('./schema/aboutProduct/DressCloths/Bit_cloths/bit_clothsName')
var bitclothsImgs = require('./schema/aboutProduct/DressCloths/Bit_cloths/bit_clothsImgDetails')
var genClothsDetails = require('./schema/aboutProduct/DressCloths/GensCloths/gensClothsDetails')
var genClothsNames = require('./schema/aboutProduct/DressCloths/GensCloths/genClothsName')
var genClothsImgs = require('./schema/aboutProduct/DressCloths/GensCloths/genClothsImgDetails')
var houseHoldDetails = require('./schema/aboutProduct/DressCloths/Household/houseHoldDetails')
var houseHoldNames = require('./schema/aboutProduct/DressCloths/Household/houseHoldName')
var houseHoldImgs = require('./schema/aboutProduct/DressCloths/Household/houseHoldImgDetails')
var kidsClothsDetails = require('./schema/aboutProduct/DressCloths/KidsClothes/kidsClothsDetails')
var kidsClothsNames = require('./schema/aboutProduct/DressCloths/KidsClothes/kidsClothsName')
var kidsClothsImgs = require('./schema/aboutProduct/DressCloths/KidsClothes/kidsClothsImgDetails')
var ladiesClothsDetails = require('./schema/aboutProduct/DressCloths/LadiesClothes/ladiesClothsDetails')
var ladiesClothsNames = require('./schema/aboutProduct/DressCloths/LadiesClothes/ladiesClothsName')
var ladiesClothsImgs = require('./schema/aboutProduct/DressCloths/LadiesClothes/ladiesClothsImgDetails')
var othersClothsDetails = require('./schema/aboutProduct/DressCloths/Others/otherClothsDetails')
var othersClothsNames = require('./schema/aboutProduct/DressCloths/Others/otherClothsName')
var othersClothsImgs = require('./schema/aboutProduct/DressCloths/Others/otherClothsImgDetails')
var airConditionerDetails = require('./schema/aboutProduct/Electronics/AirConditionar/airConditionerDetails')
var airConditionerNames = require('./schema/aboutProduct/Electronics/AirConditionar/airConditionerName')
var airConditionerImgs = require('./schema/aboutProduct/Electronics/AirConditionar/airConditionerImgDetails')
var fanDetails = require('./schema/aboutProduct/Electronics/Fan/fansDetails')
var fanNames = require('./schema/aboutProduct/Electronics/Fan/fansName')
var fanImgs = require('./schema/aboutProduct/Electronics/Fan/fansImgDetails')
var homeTheatersDetails = require('./schema/aboutProduct/Electronics/homeTheater/homeTheatersDetails')
var homeTheatersNames = require('./schema/aboutProduct/Electronics/homeTheater/homeTheatersName')
var homeTheatersImgs = require('./schema/aboutProduct/Electronics/homeTheater/homeTheatersImgDetails')
var otherElectronicsDetails = require('./schema/aboutProduct/Electronics/Others/otherElectronicsDetails')
var otherElectronicsNames = require('./schema/aboutProduct/Electronics/Others/otherElectronicName')
var otherElectronicsImgs = require('./schema/aboutProduct/Electronics/Others/otherElectronicImgDetails')
var refridgratorDetails = require('./schema/aboutProduct/Electronics/Refrigrator/refridgratorDetails')
var refridgratorNames = require('./schema/aboutProduct/Electronics/Refrigrator/refridgratorName')
var refridgratorImgs = require('./schema/aboutProduct/Electronics/Refrigrator/refridgratorImgDetails')
var televisionDetails = require('./schema/aboutProduct/Electronics/Tv/televisionDetails')
var televisionNames = require('./schema/aboutProduct/Electronics/Tv/televisionName')
var televisionImgs = require('./schema/aboutProduct/Electronics/Tv/televisionImgDetails')
var washingmachineDetails = require('./schema/aboutProduct/Electronics/WashingMachine/washingMachineDetails')
var washingmachineNames = require('./schema/aboutProduct/Electronics/WashingMachine/washingMachinName')
var washingmachineImgs = require('./schema/aboutProduct/Electronics/WashingMachine/washingMachinImgDetails')
var beaterDetails = require('./schema/aboutProduct/KitchenAppliances/beater/beaterDetails')
var beaterNames = require('./schema/aboutProduct/KitchenAppliances/beater/beaterName')
var beaterImgs = require('./schema/aboutProduct/KitchenAppliances/beater/beaterImgDetails')
var coffeeMakerDetails = require('./schema/aboutProduct/KitchenAppliances/coffeeMaker/coffeeMakerDetails')
var coffeeMakerNames = require('./schema/aboutProduct/KitchenAppliances/coffeeMaker/coffeeMakerName')
var coffeeMakerImgs = require('./schema/aboutProduct/KitchenAppliances/coffeeMaker/coffeeMakerImgDetails')
var granderDetails = require('./schema/aboutProduct/KitchenAppliances/grander/granderDetails')
var granderNames = require('./schema/aboutProduct/KitchenAppliances/grander/granderName')
var granderImgs = require('./schema/aboutProduct/KitchenAppliances/coffeeMaker/coffeeMakerImgDetails')
var kettilDetails = require('./schema/aboutProduct/KitchenAppliances/kettil/kettilDetails')
var kettilNames = require('./schema/aboutProduct/KitchenAppliances/kettil/kettilName')
var kettilImgs = require('./schema/aboutProduct/KitchenAppliances/kettil/kettilImgDetails')
var mixiDetails = require('./schema/aboutProduct/KitchenAppliances/Mixi/mixiDetails')
var mixiNames = require('./schema/aboutProduct/KitchenAppliances/Mixi/mixiName')
var mixiImgs = require('./schema/aboutProduct/KitchenAppliances/kettil/kettilImgDetails')
var ovenDetails = require('./schema/aboutProduct/KitchenAppliances/oven/ovenDetails')
var ovenNames = require('./schema/aboutProduct/KitchenAppliances/oven/ovenName')
var ovenImgs = require('./schema/aboutProduct/KitchenAppliances/oven/ovenImgDetails')
var otherKitchenDetails = require('./schema/aboutProduct/KitchenAppliances/oven/ovenDetails')
var otherKitchenNames = require('./schema/aboutProduct/KitchenAppliances/oven/ovenName')
var otherKitchenImgs = require('./schema/aboutProduct/KitchenAppliances/oven/ovenImgDetails')
////////////////////////////////////////////////////////////////////////////////////
var flourDetails = require('./schema/aboutProduct/Groceries/flour/flourDetails')
var flourNames = require('./schema/aboutProduct/Groceries/flour/flourName')
var flourImgs = require('./schema/aboutProduct/Groceries/flour/flourImgDetails')
var othersGroceriesDetails = require('./schema/aboutProduct/Groceries/Others/othersDetails')
var othersGroceriesNames = require('./schema/aboutProduct/Groceries/Others/othersName')
var othersGroceriesImgs = require('./schema/aboutProduct/Groceries/Others/othersImgDetails')
var masalaPowdersDetails = require('./schema/aboutProduct/Groceries/masalaPowders/masalaPowdersDetails')
var masalaPowdersNames = require('./schema/aboutProduct/Groceries/masalaPowders/masalaPowdersName')
var masalaPowdersImgs = require('./schema/aboutProduct/Groceries/masalaPowders/masalaPowdersImgDetails')
var riceDetails = require('./schema/aboutProduct/Groceries/Rice/riceDetails')
var riceNames = require('./schema/aboutProduct/Groceries/Rice/riceName')
var riceImgs = require('./schema/aboutProduct/Groceries/Rice/riceImgDetails')
var sugerDetails = require('./schema/aboutProduct/Groceries/Suger/sugerDetails')
var sugerNames = require('./schema/aboutProduct/Groceries/Suger/sugerName')
var sugerImgs = require('./schema/aboutProduct/Groceries/Suger/sugerImgDetails')
var wheatDetails = require('./schema/aboutProduct/Groceries/Wheat/wheatDetails')
var wheatNames = require('./schema/aboutProduct/Groceries/Wheat/wheatName')
var wheatImgs = require('./schema/aboutProduct/Groceries/Wheat/wheatImgDetails')
var brandsKitchenAppliences = require('./schema/aboutProduct/KitchenAppliances/Brands/groceriseBrandSchema')

//////////////////////////////////////////////////////////////////////////
var bootsDetails = require('./schema/aboutProduct/FootWares/Boots/bootsDetails')
var bootsNames = require('./schema/aboutProduct/FootWares/Boots/bootsName')
var bootsImgs = require('./schema/aboutProduct/FootWares/Boots/bootsImgDetails')
var canvasDetails = require('./schema/aboutProduct/FootWares/canvas/canvasDetails')
var canvasNames = require('./schema/aboutProduct/FootWares/canvas/canvasName')
var canvasImgs = require('./schema/aboutProduct/FootWares/canvas/canvasImgDetails')
var sandalsDetails = require('./schema/aboutProduct/FootWares/Sandals/sandalsDetails')
var sandalsNames = require('./schema/aboutProduct/FootWares/Sandals/sandalsName')
var sandalsImgs = require('./schema/aboutProduct/FootWares/Sandals/sandalsImgDetails')
var shoesDetails = require('./schema/aboutProduct/FootWares/shoes/shoesDetails')
var shoesNames = require('./schema/aboutProduct/FootWares/shoes/shoesName')
var shoesImgs = require('./schema/aboutProduct/FootWares/shoes/shoesImgDetails')
var slippersDetails = require('./schema/aboutProduct/FootWares/Slipper/slipperDetails')
var slippersNames = require('./schema/aboutProduct/FootWares/Slipper/slipperName')
var slippersImgs = require('./schema/aboutProduct/FootWares/Slipper/slipperImgDetails')
var socksDetails = require('./schema/aboutProduct/FootWares/Socks/socksDetails')
var socksNames = require('./schema/aboutProduct/FootWares/Socks/socksName')
var socksImgs = require('./schema/aboutProduct/FootWares/Socks/socksImgDetails')
var specificFootwearDetails = require('./schema/aboutProduct/FootWares/SpecificFootwear/SpecificFootwearDetails')
var specificFootwearNames = require('./schema/aboutProduct/FootWares/SpecificFootwear/SpecificFootwearName')
var specificFootwearImgs = require('./schema/aboutProduct/FootWares/SpecificFootwear/SpecificFootwearImgDetails')
var sportsShoesDetails = require('./schema/aboutProduct/FootWares/sportsShoes/sportsShoesDetails')
var sportsShoesNames = require('./schema/aboutProduct/FootWares/sportsShoes/sportsShoesName')
var sportsShoesImgs = require('./schema/aboutProduct/FootWares/sportsShoes/sportsShoesImgDetails')
var traditionalfootwearDetails = require('./schema/aboutProduct/FootWares/Traditionalfootwear/TraditionalfootwearDetails')
var traditionalfootwearNames = require('./schema/aboutProduct/FootWares/Traditionalfootwear/TraditionalfootwearName')
var traditionalfootwearImgs = require('./schema/aboutProduct/FootWares/Traditionalfootwear/TraditionalfootwearImgDetails')
var OtherFootwearDetails = require('./schema/aboutProduct/FootWares/Traditionalfootwear/TraditionalfootwearDetails')
var OtherFootwearNames = require('./schema/aboutProduct/FootWares/Traditionalfootwear/TraditionalfootwearName')
var OtherFootwearImgs = require('./schema/aboutProduct/FootWares/Traditionalfootwear/TraditionalfootwearImgDetails')
var footwearBrands = require('./schema/aboutProduct/FootWares/Brands/footWaresBrandSchema')
// console.log("show----->",bitcloths)
class Service {
  // Categories

  async createCategories(params) {
    try {
      const data = await new Service().CategoriesVerification(params.name)
      console.log(_.isEmpty(data))
      if (data) {
        return data
      } else {
        const results = await categories(params).save()
        return results
      }
    } catch (error) {
      return error
    }
  }

  async CategoriesVerification(params) {
    try {
      return categories.findOne({ name: params }).sort({ createdAt: -1 }).lean().exec()
    } catch (error) {
      return error
    }
  }

  async getCategories() {
    try {
      const result = categories.find({ status: "ACTIVE" }).sort({ createdAt: -1 }).lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  async getCategoriesById(param) {
    return categories.find({ $and: [{ _id: param }, { status: "ACTIVE" }] }).sort({ createdAt: -1 }).lean().catch((e) => {
      return e
    })
  }


  async updateCategoriesById(id, params) {
    return categories.findOneAndUpdate(id, params).sort({ createdAt: -1 }).lean().catch((e) => {
      return e
    })
  }

  async deleteCategoriesById(id) {
    return categories.findOneAndUpdate({ _id: { $eq: id } }, { $set: { status: "DELETE" } }).sort({ createdAt: -1 }).lean().catch((e) => {
      return e
    })
  }

  // Brand Collections

  async createsBrandCollections(params) {
    try {
      if (params.categoryName === 'MOBILE PHONES') {
        const getNameOfCategory = await new Service().getNameOfCategories(params)
        const data = await new Service().brandVerification(params)
        if (data !== null) {
          return data
        } else {
          const fetchData = await new Service().brandCollectionsPositions(params, getNameOfCategory)
          const results = await new mobileBrands(fetchData).save()
          return results
        }
      } else if (params.categoryName === 'DRESSES & CLOTHS') {
        const getNameOfCategory = await new Service().getNameOfCategories(params)
        const data = await new Service().brandVerification(params)
        if (data !== null) {
          return data
        } else {
          const fetchData = await new Service().brandCollectionsPositions(params, getNameOfCategory)
          const results = await new dressesBrands(fetchData).save()
          return results
        }
      } else if (params.categoryName === 'ELECTRONICS') {
        const getNameOfCategory = await new Service().getNameOfCategories(params)
        const data = await new Service().brandVerification(params)
        if (data !== null) {
          return data
        } else {
          const fetchData = await new Service().brandCollectionsPositions(params, getNameOfCategory)
          const results = await new electronicsBrands(fetchData).save()
          return results
        }
      } else if (params.categoryName === 'GROCERIES') {
        const getNameOfCategory = await new Service().getNameOfCategories(params)
        const data = await new Service().brandVerification(params)
        if (data !== null) {
          return data
        } else {
          const fetchData = await new Service().brandCollectionsPositions(params, getNameOfCategory)
          const results = await new groceriesBrands().save(fetchData)
          return results
        }
      } else if (params.categoryName === 'FOOT WEAR') {
        const getNameOfCategory = await new Service().getNameOfCategories(params)
        const data = await new Service().brandVerification(params)
        if (data !== null) {
          return data
        } else {
          const fetchData = await new Service().brandCollectionsPositions(params, getNameOfCategory)
          const results = await new footwearBrands().save(fetchData)
          return results
        }
      } else if (params.categoryName === 'KITCHEN APPLIANCES') {
        const getNameOfCategory = await new Service().getNameOfCategories(params)
        const data = await new Service().brandVerification(params)
        if (data !== null) {
          return data
        } else {
          const fetchData = await new Service().brandCollectionsPositions(params, getNameOfCategory)
          const results = await new brandsKitchenAppliences().save(fetchData)
          return results
        }
      }
    } catch (error) {
      return error
    }
  }

  async brandCollectionsPositions(params, getNameOfCategory) {
    try {
      const data_1 = {
        name: params.name,
        categoryName: params.categoryName,
        categoryRefId: getNameOfCategory[0]._id,
        details: params.details
      }
      return data_1
    } catch (error) {
      return error
    }
  }

  async getNameOfCategories(params) {
    try {
      const result = categories.find({ name: params.categoryName }).populate().lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  async getNameOfBrands(params) {
    try {
      if (params.categoryName === 'MOBILE PHONES') {
        return mobileBrands.find({ name: params.brandName }).populate().lean().exec()
      } else if (params.categoryName === 'DRESSES & CLOTHS') {
        return dressesBrands.find({ name: params.brandName }).populate().lean().exec()
      } else if (params.categoryName === 'ELECTRONICS') {
        return electronicsBrands.find({ name: params.brandName }).populate().lean().exec()
      } else if (params.categoryName === 'GROCERIES') {
        return groceriesBrands.find({ name: params.brandName }).populate().lean().exec()
      } else if (params.categoryName === 'FOOT WEAR') {
        return footwearBrands.find({ name: params.brandName }).populate().lean().exec()
      } else if (params.categoryName === 'KITCHEN APPLIANCES') {
        return brandsKitchenAppliences.find({ name: params.brandName }).populate().lean().exec()
      }

    } catch (e) {
      return e
    }
  }

  async getNameOfBrandsDresses(params) {
    try {
      const result = dressesBrands.find({ name: params.brandName }).populate().lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  async getNameOfBrandsElectronics(params) {
    try {
      const result = electronicsBrands.find({ name: params.brandName }).populate().lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }


  async getNameOfBrandsKitchenApplience(params) {
    try {
      const result = brandsKitchenAppliences.find({ name: params.brandName }).populate().lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  async getNameOfBrandsGroceries(params) {
    try {
      const result = groceriesBrands.find({ name: params.brandName }).populate().lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  async brandVerification(params) {
    try {
      if (params.categoryName === 'MOBILE PHONES') {
        return mobileBrands.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      } else if (params.categoryName === 'DRESSES & CLOTHS') {
        return dressesBrands.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      } else if (params.categoryName === 'ELECTRONICS') {
        return electronicsBrands.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      } else if (params.categoryName === 'GROCERIES') {
        return groceriesBrands.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      } else if (params.categoryName === 'FOOT WEAR') {
        return footwearBrands.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      } else if (params.categoryName === 'KITCHEN APPLIANCES') {
        return brandsKitchenAppliences.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      }
    } catch (error) {
      return error
    }
  }


  async getBrands() {
    try {
      const result = mobileBrands.find({ status: "ACTIVE" }).sort({ createdAt: -1 }).lean().exec()
      console.log(JSON.stringify(result).length > 0)
      return result
    } catch (e) {
      return e
    }
  }

  // Product Collections

  async createproductCollections(params) {
    try {
      if (params.categoryName === 'MOBILE PHONES') {
        const param = params
        const getNameOfCategory = await new Service().getNameOfCategories(param)
        const getNameOfBrand = await new Service().getNameOfBrands(param)
        if (_.isEmpty(getNameOfBrand)) {
          return { message: "Brand Not exits", code: "201" }
        } else {
          const data = await new Service().productVerificationAll(param)
          if (!_.isEmpty(data)) {
            console.log("exit")
            return data
          } else {
            const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
            console.log("verifySaveData", verifySaveData)
            const results = await new mobileProductName(verifySaveData).save()
            const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
            console.log("verifySaveData_1", verifySaveData_1)
            const results_1 = await new mobileProductDetails(verifySaveData_1).save()
            console.log(results_1)
            return { results, results_1, message: "Data Entered Success", code: "200" }
          }
        }
      } else if (params.categoryName === 'DRESSES & CLOTHS') {
        const param = params
        const getNameOfCategory = await new Service().getNameOfCategories(param)
        const getNameOfBrand = await new Service().getNameOfBrands(param)
        if (_.isEmpty(getNameOfBrand)) {
          return { message: "Brand Not exits", code: "201" }
        } else {
          if (params.for === 'BIT CLOTHS') {
            const data = await new Service().productVerificationAll(params)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new bitclothsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new bitclothsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'MENS') {
            const data = await new Service().productVerificationAll(params)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new genClothsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new genClothsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'LADIES') {
            const data = await new Service().productVerificationAll(params)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new ladiesClothsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new ladiesClothsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'KIDS') {
            const data = await new Service().productVerificationAll(params)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new kidsClothsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new kidsClothsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'OTHERS') {
            const data = await new Service().productVerificationAll(params)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new othersClothsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new othersClothsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'HOUSE HOLD') {
            const data = await new Service().productVerificationAll(params)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new houseHoldNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new houseHoldDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          }
        }
      } else if (params.categoryName === 'FOOT WEAR') {
        const param = params
        const getNameOfCategory = await new Service().getNameOfCategories(param)
        const getNameOfBrand = await new Service().getNameOfBrands(param)
        if (_.isEmpty(getNameOfBrand)) {
          return { message: "Brand Not exits", code: "201" }
        } else {
          if (params.for === 'BOOTS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new bootsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new bootsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'CANVAS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new canvasNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new canvasDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SANDALS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new sandalsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new sandalsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SHOES') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new shoesNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new shoesDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SLIPPERS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new slippersNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new slippersDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'OTHERS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new OtherFootwearNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new OtherFootwearDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SOCKS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new socksNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new socksDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SPECIFIC FOOT WEAR') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new specificFootwearNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new specificFootwearDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SPOTRS SHOES') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new sportsShoesNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new sportsShoesDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'TRADITIONAL FOOT WEAR') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new traditionalfootwearNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new traditionalfootwearDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          }
        }
      } else if (params.categoryName === 'ELECTRONICS') {
        const param = params
        const getNameOfCategory = await new Service().getNameOfCategories(param)
        const getNameOfBrand = await new Service().getNameOfBrands(param)
        if (_.isEmpty(getNameOfBrand)) {
          return { message: "Brand Not exits", code: "201" }
        } else {
          if (params.for === 'AIR CONDITIONER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new airConditionerNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new airConditionerDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'FAN') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new fanNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new fanDetails(verifySaveData_1).save()
              return { results, results_1 }
            }

          } else if (params.for === 'HOME THEATER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new homeTheatersNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new homeTheatersDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'OTHERS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new otherElectronicsNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new otherElectronicsDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'TELEVISION') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new televisionNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new televisionDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'WASHING MACHINE') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new washingmachineNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new washingmachineDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'REFRIGRATOR') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new refridgratorNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new refridgratorDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          }
        }
      } else if (params.categoryName === 'GROCERIES') {
        const param = params
        const getNameOfCategory = await new Service().getNameOfCategories(param)
        const getNameOfBrand = await new Service().getNameOfBrands(param)
        if (_.isEmpty(getNameOfBrand)) {
          return { message: "Brand Not exits", code: "201" }
        } else {
          if (params.for === 'FLOUR') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new flourNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new flourDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'OTHERS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new othersGroceriesNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new othersGroceriesDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'MASALA POWDER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new masalaPowdersNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new masalaPowdersDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'RICE') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new riceNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new riceDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'SUGER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new sugerNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new sugerDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'WHEAT') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new wheatNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new wheatDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          }
        }
      } else if (params.categoryName === 'KITCHEN APPLIANCES') {
        const param = params
        const getNameOfCategory = await new Service().getNameOfCategories(param)
        const getNameOfBrand = await new Service().getNameOfBrands(param)
        if (_.isEmpty(getNameOfBrand)) {
          return { message: "Brand Not exits", code: "201" }
        } else {
          if (params.for === 'BEATER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new beaterNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new beaterDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'COFFEE MAKER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new coffeeMakerNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new coffeeMakerDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'GRANDER') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new granderNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new granderDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'KETTIL') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new kettilNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new kettilDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'MIXI') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new mixiNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new mixiDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'OVEN') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new ovenNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new ovenDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          } else if (params.for === 'OTHERS') {
            const data = await new Service().productVerificationAll(params.name)
            if (data !== null) {
              return data
            } else {
              const verifySaveData = await new Service().getproductAlign(param, getNameOfCategory, getNameOfBrand)
              const results = await new otherKitchenNames(verifySaveData).save()
              const verifySaveData_1 = await new Service().getproductAlign_1(param, getNameOfCategory, getNameOfBrand, results)
              const results_1 = await new otherKitchenDetails(verifySaveData_1).save()
              return { results, results_1 }
            }
          }
        }
      }
    } catch (error) {
      return error
    }
  }

  async productVerification(params) {
    try {
      return mobileProductName.findOne({ name: { $eq: params } }).sort({ createdAt: -1 }).lean().exec()
    } catch (error) {
      return error
    }
  }

  async productVerificationAll(params) {
    try {
      if (params.categoryName === 'GROCERIES') {
        if (params.for === 'BIT CLOTHS') {
          return bitclothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'MENS') {
          return genClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'LADIES') {
          return ladiesClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'KIDS') {
          return kidsClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'OTHERS') {
          return othersClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'HOUSE HOLD') {
          return houseHoldNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        }
      } else if (params.categoryName === 'DRESSES & CLOTHS') {
        if (params.for === 'BIT CLOTHS') {
          return bitclothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'MENS') {
          return genClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'LADIES') {
          return ladiesClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'KIDS') {
          return kidsClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'OTHERS') {
          return othersClothsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'HOUSE HOLD') {
          return houseHoldNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        }
      } else if (params.categoryName === 'ELECTRONICS') {
        if (params.for === 'AIR CONDITIONER') {
          return airConditionerNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'FAN') {
          return fanNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'HOME THEATER') {
          return homeTheatersNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'OTHERS') {
          return otherElectronicsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'TELEVISION') {
          return televisionNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'WASHING MACHINE') {
          return washingmachineNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'REFRIGRATOR') {
          return refridgratorNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        }
      } else if (params.categoryName === 'MOBILE PHONES') {
        return mobileProductName.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
      } else if (params.categoryName === 'KITCHEN APPLIANCES') {
        if (params.for === 'BEATER') {
          return beaterNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'COFFEE MAKER') {
          return coffeeMakerNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'GRANDER') {
          return granderNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'KETTIL') {
          return kettilNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'MIXI') {
          return mixiNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'OVEN') {
          return ovenNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'OTHERS') {
          return otherKitchenNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        }
      } else if (params.categoryName === 'FOOT WEAR') {
        if (params.for === 'BOOTS') {
          return bootsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'CANVAS') {
          return canvasNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'SANDALS') {
          return sandalsNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'SHOES') {
          return shoesNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'SLIPPERS') {
          return slippersNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'OTHERS') {
          return OtherFootwearNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'SOCKS') {
          return socksNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'SPECIFIC FOOT WEAR') {
          return specificFootwearNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'SPOTRS SHOES') {
          return sportsShoesNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        } else if (params.for === 'TRADITIONAL FOOT WEAR') {
          return traditionalfootwearNames.findOne({ name: { $eq: params.name } }).sort({ createdAt: -1 }).lean().exec()
        }
      }
    } catch (error) {
    }
  }

  async getNameOfBrand(params) {
    try {
      console.log(params.brandName)
      const result = mobileBrands.find({ name: { $eq: params.brandName } }).sort({ createdAt: -1 }).lean().exec()
      return result
    } catch (e) {
      return e
    }
  }

  async getproductAlign(params, getNameOfCategory, getNameOfBrand) {
    try {
      const data_1 = {
        name: params.name,
        brandName: params.brandName,
        brandRefId: getNameOfBrand[0]._id,
        description: params.description,
        categoryName: params.categoryName,
        categoryRefId: getNameOfCategory[0]._id
      }
      return data_1
    } catch (error) {
      return error
    }
  }
  async getproductAlign_1(params, getNameOfCategory, getNameOfBrand, results) {
    try {
      const data_2 = {
        // common 
        name: params.name, price: params.price, discount: params.discount, Warranty: params.Warranty,
        productRefId: results._id, categoryName: params.categoryName, categoryRefId: getNameOfCategory[0]._id,
        brandName: params.brandName, brandRefId: getNameOfBrand[0]._id, quantity: params.quantity, rating: params.rating,
        // phone
        Performance: params.Performance, Display: params.Display, RearCamera: params.RearCamera, FrontCamera: params.FrontCamera,
        Battery: params.Battery, Storage: params.Storage, Benchmarks: params.Benchmarks,LaunchDate: params.LaunchDate,
        OperatingSystem: params.OperatingSystem, CustomUI: params.CustomUI, Chipset: params.Chipset, CPU: params.Cpu,
        Architecture: params.Architecture, Fabrication: params.Fabrication, Graphics: params.Graphics, RAM: params.Ram,
        DisplayType: params.DisplayType, ScreenSize: params.ScreenSize, Resolution: params.Resolution, AspectRatio: params.AspectRatio,
        PixelDensity: params.PixelDensity, ScreenProtection: params.ScreenProtection, TouchScreen: params.TouchScreen,
        Dimensions: params.Dimensions, Weight: params.Weight, BuildMaterial: params.BuildMaterial, Colours: params.Colours,
        Settings: params.Settings, Network: params.Network,FingerprintSensor: params.FingerprintSensor, FaceIDSensor: params.FaceIDSensor,

        // dresses....
        dressType: params.dressType,
        for: params.for,
        usedFor: params.usedFor,
        dressPurpose: params.dressPurpose,
        dressSize: params.dressSize,
        quality: params.quality,
        // air conditioner
        Type: params.Type,
        capacityInTons: params.capacityInTons,
        weight: params.weight,
        Warranty: params.Warranty,
        launchYear: params.launchYear,
        starRating: params.starRating,
        BEERatingYear: params.BEERatingYear,
        coolingAndHeating: params.coolingAndHeating,
        inTheBox: params.inTheBox,
        availableOffers: params.availableOffers,
        coolinCapacity: params.coolinCapacity,
        compressorType: params.compressorType,
        Dehumidification: params.Dehumidification,
        remoteControl: params.remoteControl,
        Refrigerant: params.Refrigerant,
        operatingModes: params.operatingModes,
        condenserCoil: params.condenserCoil,
      }
      return data_2
    } catch (error) {
      return error
    }
  }
}

const Services = new Service()

module.exports = { Services, Service }
