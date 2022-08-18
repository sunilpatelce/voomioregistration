const express = require('express');
const { check } = require('express-validator');

const userController = require('../controllers/user-controllers');
//const checkAuth = require('../middleware/check-auth');
const router = express.Router();

//router.use(checkAuth);

router.post(
  '/verification',
  [
    check('email').not().isEmpty()
  ],
  userController.verificationCode
);


router.post(
  '/register',
  [
    check('email').not().isEmpty(),
    check('password').not().isEmpty(),
    check('verificationCode').not().isEmpty(),
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
    check('phone').not().isEmpty(),
    check('country').not().isEmpty(),
    check('dob').not().isEmpty(),
    check('displayName').not().isEmpty(),
    check('terms').not().isEmpty(),
    check('marketing').not().isEmpty(),
  ],
  userController.registerUser
);

module.exports = router;
