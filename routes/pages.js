const express = require('express');
const router = express.Router();



router.get("/", (req, res) =>{
    res.send("This the home page!");
});

router.get("/about", (req, res) => {
    res.send("This the about page!");
});


module.exports = router;