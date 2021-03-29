var express = require('express');
const router = express.Router();

const { createUser, login } = require('src/http/presentation/controllers/user');

router.post('/sign-up', createUser);
router.post('/login', login);

module.exports = router;
