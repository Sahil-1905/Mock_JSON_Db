const express = require ('express');
const router = express.Router();
const{createUSer} = require('../controllers/usercontroller.js');


//Router handler for our homepage
router.get('/home', (req, res)=>{
    res.render('home');
});




module.exports = router;