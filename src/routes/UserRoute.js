const router = require('express').Router();

router.post('/signup',signupController);
router.post('/signin',signinController);