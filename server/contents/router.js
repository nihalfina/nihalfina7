const express = require('express');
const router = express.Router()
const services = require('./service');
const Controller = require('./controller');
var verifyToken = require('../../helpers/verify_token')


const controller = new Controller()


router
  .route('/api/categories')
  .post(
    // verifyToken.verifyToken.bind(controller),
    controller.createCategories.bind(controller));


router
  .route('/api/categories')
  .get(
    // verifyToken.verifyToken.bind(controller),
    controller.getCategories.bind(controller));

router
  .route('/api/categories/:id')
  .get(
    verifyToken.verifyToken.bind(controller),
    controller.getCategoriesById.bind(controller));

router
  .route('/api/categories/:id')
  .put(
    verifyToken.verifyToken.bind(controller),
    controller.updateCategoriesById.bind(controller));


router
  .route('/api/categories/:id')
  .delete(
    verifyToken.verifyToken.bind(controller),
    controller.deleteCategoriesById.bind(controller));


router
  .route('/api/brands')
  .post(
    // verifyToken.verifyToken.bind(controller),
    controller.createBrandCollections.bind(controller));


router
  .route('/api/brands')
  .get(
    // verifyToken.verifyToken.bind(controller),
    controller.getBrands.bind(controller));


router
  .route('/api/product')
  .post(
    // verifyToken.verifyToken.bind(controller),
    controller.createproductCollections.bind(controller));


module.exports = router