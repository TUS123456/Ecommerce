import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify'
import axios from 'axios';
import { useNavigate ,useLocation} from "react-router-dom";
import '../../styles/AuthStyles.css'
import { useAuth } from "../../context/Authentication";


const Login = () => {

  //USE CONTEXT; 
  const {auth,setAuth}=useAuth();

  // STATE ARE CREATED TO ASSIGN  VALUE; 
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("")
  const Navigate=useNavigate();
  const location=useLocation();

  //FORM FUNCTION ON SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/v1/auth/login`, { email, password });
      if (response.data.success) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(response.data));
        Navigate( location.state ||'/');
        toast.success("You are Logged Successfully");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(`{error}`);
    }
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
              
            <div>
            <button className="mb-3" type="submit">
              Login
            </button>
            <button type="button" onClick={()=>Navigate('/forget-password')}>
              Forgot Password
            </button>
            </div>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
