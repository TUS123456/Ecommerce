import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../../styles/AuthStyles.css'


const Register = () => {

  // STATE ARE CREATED TO ASSIGN  VALUE 
  const [name,setname]=useState(" ")
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("")
  const [phone,setphone]=useState("");
  const [address,setaddress]=useState("");
  const [answer,setanswer]=useState("");
  const Navigate=useNavigate();

  //FORM FUNCTION ON SUBMIT
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(`/api/v1/auth/register`,{name,email,password,phone,address,answer});
      if(response.data.success){
        toast.success(response.data.message);
        Navigate('/login')
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch(error){
      console.log(error);
      toast.error(`{error}`)    }
  }



  return (
    <Layout title="Register E-commerce App">
      <div className="form-cotaier">
        <form onSubmit={handleSubmit}
        
        style={{margin: '20% 20% 10%',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        }}>
          <fieldset>
            <h2>Register</h2>
            <div className="Field">
              <label>Full name <sup>*</sup></label>
              <input type="text"
              value={name}
              onChange={(e)=>{
                setname(e.target.value)
              }}
              placeholder="Full name" 
                required
              />
            </div>
            <div className="Field">
              <label>Email address <sup>*</sup></label>
              <input type="email" 
              className="form-control"
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              placeholder="Email address" 
              required
              />
              
            </div>
            <div className="Field">
              <label>Password <sup>*</sup></label>
              <input type="password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
              placeholder="Password" 
                required
              />
            </div>
            <div className="Field">
              <label>Phone <sup>*</sup></label>
              <input type="text" 
              value={phone}
              onChange={(e)=>{
                setphone(e.target.value)
              }}
              placeholder="Enter Phone Number" 
              required
              />
            </div>
            <div className="Field">
              <label>Address <sup>*</sup></label>
              <input type="text" 
              value={address}
              onChange={(e)=>{
                setaddress(e.target.value)
              }}
              placeholder="Enter Address" 
              required
              />
              <div className="Field">
              <label>Answer <sup>*</sup></label>
              <input type="text" 
              value={answer}
              onChange={(e)=>{
                setanswer(e.target.value)
              }}
              placeholder="Your First School Name"
              required
              />
            </div>
            </div>
            <button type="submit">
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
