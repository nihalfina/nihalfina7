const express = require('express');
const router = express.Router()
const services = require('./service');
const Controller = require('./controller');
var verifyToken = require('../../helpers/verify_token')


const controller = new Controller()


router
  .route('/api/register')
  .post(controller.registerAndgetOtp.bind(controller));

router
  .route('/api/register/otp/:id')
  .post(controller.verifyOtpAndRegister.bind(controller));


router
  .route('/api/refresh-token')
  .post(controller.refreshToken.bind(controller));

router
  .route('/api/register')
  .get(
    verifyToken.verifyToken.bind(controller),
    controller.getRegisterAccount.bind(controller));

router
  .route('/api/register/:id')
  .get(
    verifyToken.verifyToken.bind(controller),
    controller.getRegisterAccountById.bind(controller));

router
  .route('/api/register/:id')
  .put(
    verifyToken.verifyToken.bind(controller),
    controller.updateRegisterAccountById.bind(controller));

router
  .route('/api/register/:id')
  .delete(
    verifyToken.verifyToken.bind(controller),
    controller.deleteRegisterAccountById.bind(controller));

router
  .route('/api/login')
  .post(controller.userLogIn.bind(controller));

module.exports = router