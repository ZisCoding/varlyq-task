const express = require('express');
const router = express.Router();
const userController = require('../controllers/createUserController');




router.get('/',(req,res)=>{
    res.render('home.ejs');
})

router.post('/create-user/form1', userController.form1Controller);

router.post('/create-user/form2/:id', userController.form2Controller);

router.post('/file-upload/:id',userController.fileUploadController);

module.exports = router;