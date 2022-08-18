const fs = require('fs');
const nodemailer = require("nodemailer");

const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const verificationCode = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: 'user',
      pass: 'pass',
    },
  });

  const { email } = req.body;
  
  var mailOptions = {
    from: 'fromemail',
    to: email,
    subject: 'Sending Email using Node',
    html: `<h1>Email Confirmation</h1>
           <h2>Hello There</h2>
           <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
           </div>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


}



const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  //console.log(req.body);
  const {
    email,
    password,
    verificationCode,
    firstName,
    lastName,
    phone,
    country,
    dob,
    displayName,
    terms,
    marketing,
  } = req.body;

  const createdUser = new User({
    email,
    password,
    verificationCode,
    firstName,
    lastName,
    phone,
    country,
    dob,
    displayName,
    terms,
    marketing,
  });

  try {
    //const sess = await mongoose.startSession();
    //sess.startTransaction();
    await createdUser.save();
    //await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('Creating user failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser });
};

exports.registerUser = registerUser;
exports.verificationCode = verificationCode;