const router = require('express').Router();
const {login} = require('../controllers/LoginController');
const { validationLogin } = require('../validations/Login.validation');

router.post('/', validationLogin, login);

module.exports = router;