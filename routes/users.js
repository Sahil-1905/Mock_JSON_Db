const express = require ('express');
const router = express.Router();


//Router handler for our homepage
router.get('/home', (req, res)=>{
    res.render('home');
});








module.exports = router;