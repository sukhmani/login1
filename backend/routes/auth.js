const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const otplib = require('otplib');
const User = require('../models/User');
const router = express.Router();

router.post('/register', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(400).json(info);
    req.logIn(user, err => {
      if (err) return next(err);
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
      res.json({ token, user });
    });
  })(req, res, next);
});

module.exports = router;
