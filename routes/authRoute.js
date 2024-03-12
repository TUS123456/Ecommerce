// authRoute.js
import express from 'express';
import {registerController,loginController, testController ,forgotPasswordController} from '../controllers/authController.js'; // Corrected import
import { isAdmin, requireSign } from '../middlewares/authMiddleware.js'

const router = express.Router();

// Routing
//Register || Method POST
router.post('/register', registerController);

//Login || method-post
router.post('/login',loginController);


//test Route
router.get('/test',requireSign,isAdmin,testController);


//Protected route auth
router.get('/user-auth',requireSign,(req,res)=>{
    res.status(200).send({ok:true});
})

router.get('/admin-auth',requireSign,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//FORGET PASSWORD || PASSWORD
router.post('/forget-password',forgotPasswordController)

export default router;