// authRoute.js
import express from 'express';
import {registerController,loginController, testController} from '../controllers/authController.js'; // Corrected import
import { isAdmin, requireSign } from '../middlewares/authMiddleware.js'

const router = express.Router();

// Routing
//Register || Method POST
router.post('/register', registerController);

//Login || method-post
router.post('/login',loginController);


//test Route
router.get('/test',requireSign,isAdmin,testController);


export default router;