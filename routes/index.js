const { Router } = require('express');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Community API'
  });
});

module.exports = router;
