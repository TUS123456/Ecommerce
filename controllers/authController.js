import { comparePassword, hashPassword } from '../helpers/authHelper.js'
import userModel from '../models/userModel.js'
import  Jwt  from 'jsonwebtoken';

export const registerController = async(req,resp) => {
    try{
        const {name,email,password,phone,answer,address}=req.body;
        //validation
        if(!name){
            return resp.send({message:"Name is Required"});
        }
        if(!email){
            return resp.send({message:"email is Required"});
        }
        if(!password){
            return resp.send({message:"password is Required"});
        }
        if(!phone){
            return resp.send({message:"phone is Required"});
        }
        if(!address){
            return resp.send({message:"address is Required"});
        }
        if(!answer){
            return resp.send({message:"answer is Required"});
        }

        //existing user
        const existingUser=await userModel.findOne({email});

        if(existingUser){
            return resp.status(200).send({
                success:true,
                message:"Already User exist Please Login",
            })
        }

        //User Register
        const hashedPassword=await hashPassword(password);

        const user=await new userModel({name,email,phone,address,answer,password:hashedPassword}).save()
    
        


        
        resp.status(201).send({
            success:true,
            message:"You are registered",
            user:user,
        })



    }catch(err){
        console.Console.log(err);
        resp.status(500).send({
            success:false,
            message:"Error in registration",
            Error:err
        })
    }
};

export const loginController=async(req,resp)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return resp.status(404).send({
                success:false,
                message:'Please provide email and password',
            })
        }

        const user = await userModel.findOne({email});
        if(!user){
            return resp.status(404).send({
                success:false,
                message:"You are not registered"
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            return resp.status(200).send({
                success:false,
                message:"Invalid Password",    
        })
        }

        //create Token


const token=await Jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'7d'});
resp.status(200).send({
    success:true,
    message:'Login Successfully',
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        role:user.role,
    },
    token,
})






    }catch(err){
        console.log(err);
        resp.status(500).send({
            success:false,
            message:"Login Error",
            error:err
        })
    }

}
//test controller
export const testController=(req,resp)=>{
    resp.status(200).send({
        success:true,
        message:'Test APi working Successfully'
    })
}


export const forgotPasswordController = async(req,resp)=>{
   try{
        const {email,answer,Newpassword}=req.body;
        if(!email){
            resp.status(400).send({message:'Email IS REQUIRED'})
        }
        if(!answer){
            resp.status(400).send({message:'QUESTION IS REQUIRED'})
        }
        if(!Newpassword){
            resp.status(400).send({message:'NEWPASSWORD IS REQUIRED'})
        }


        //Check Email

        const user=await userModel.findOne({email,answer});

        //VALIDATION

        if(!user){
            resp.status(404).send({
                success:false,
                message:'wrong Email Or Answer'
            })
        }


        const hashed=await hashPassword(Newpassword);

        const result=await userModel.findByIdAndUpdate(user._id, {password:hashed});

        resp.status(200).send({
            success:true,
            message:"Password Update Succesfully",
            user:result,
        })
   }catch(err){
        console.log(err);
        resp.status(500).send({
            success:false,
            message:'Something Went Wrong',
            error:err
        })
   }     
}