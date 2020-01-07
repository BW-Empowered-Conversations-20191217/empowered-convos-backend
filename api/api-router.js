const express = require('express');
const router = express.Router();

// const authRouter = require('../auth/auth-router.js');
// const usersRouter = require('../users/users-router.js');

// /api/auth
// router.use('/auth', authRouter);
// /api/users
// router.use('/users', usersRouter);

router.get('/', (req, res) => {
    res.json({
        api: "It LIVES"
    });
});

module.exports = router;