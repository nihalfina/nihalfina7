const express = require('express');
const router = express.Router()
const services = require('./service');
const Controller = require('./controller');
var verifyToken = require('../../helpers/verify_token')


const controller = new Controller()


router
  .route('/api/sellerRegister')
  .post(controller.registerAndgetOtp.bind(controller));

router
  .route('/api/sellerRegister/otp/:id')
  .post(controller.verifyOtpAndRegister.bind(controller));


router
  .route('/api/refresh-token')
  .post(controller.refreshToken.bind(controller));

router
  .route('/api/sellerRegister')
  .get(
    verifyToken.verifyToken.bind(controller),
    controller.getRegisterAccount.bind(controller));

router
  .route('/api/sellerRegister/:id')
  .get(
    verifyToken.verifyToken.bind(controller),
    controller.getRegisterAccountById.bind(controller));

router
  .route('/api/sellerRegister/:id')
  .put(
    verifyToken.verifyToken.bind(controller),
    controller.updateRegisterAccountById.bind(controller));

router
  .route('/api/sellerRegister/:id')
  .delete(
    verifyToken.verifyToken.bind(controller),
    controller.deleteRegisterAccountById.bind(controller));

router
  .route('/api/sellerLogin')
  .post(controller.userLogIn.bind(controller));

module.exports = router