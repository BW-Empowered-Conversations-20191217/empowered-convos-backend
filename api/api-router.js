const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        api: "It LIVES"
    });
});



module.exports = router;