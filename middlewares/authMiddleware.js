import Jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes Token base
export const requireSign = (req, resp, next) => {
  try {
    const token = req.headers.authorization; // Corrected property name
    if (!token) {
      return resp.status(401).json({ message: "Unauthorized: Token not provided" });
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    req.user=decoded;
    next();
  } catch (err) {
    console.error(err);
    return resp.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};


export const isAdmin=async(req,resp,next)=>{
    try{
        const user=await userModel.findById(req.user._id);
        if(user &&  user.role !== 1){
            return resp.status(401).send({
                success:false,
                message:'UnAuthorized Access'
            })
        }else{
            next();
        }
    }catch (err) {
        console.error(err);
        return resp.status(401).json({ 
            
            message: "Unauthorized: Invalid token" });
    
        }
}