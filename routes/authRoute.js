// authRoute.js
import express from 'express';
import {registerController,loginController} from '../controllers/authController.js'; // Corrected import

const router = express.Router();

// Routing
//Register || Method POST
router.post('/register', registerController);


//Login || method-post
router.post('/login',loginController);
export default router;