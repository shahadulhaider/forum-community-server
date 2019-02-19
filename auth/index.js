const router = require('express').Router();
const passport = require('passport');
require('../passport/google');

const { create } = require('./utils');

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', (req, res, next) => {
  passport.authenticate('google', async (err, user) => {
    if (err) {
      return next(err);
    }

    try {
      const token = await create(user);
      res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
    } catch (error) {
      res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
    }
  })(req, res, next);
});

module.exports = router;
