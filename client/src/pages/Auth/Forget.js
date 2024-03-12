import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import {toast} from 'react-toastify'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import '../../styles/AuthStyles.css'
import { useAuth } from "../../context/Authentication";

const Forget = () => {

    // STATE ARE CREATED TO ASSIGN  VALUE; 
    const [email,setemail]=useState("");
    const [Newpassword,setNewpassword]=useState("");
    const [answer,setanswer]=useState("");
    const Navigate=useNavigate();
  
    //FORM FUNCTION ON SUBMIT
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`/api/v1/auth/forget-password`, { 
          email, 
          Newpassword,
          answer
      });
        if (response.data.success) {
          
          toast.success(response.data && response.data.message); 
          Navigate("/login");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(`{error}`);
      }
    }

  return (
    <Layout title={'Forgot Password - Ecommerce App'}>
    <div className="form-cotaier">
      <form onSubmit={handleSubmit}
      
      style={{margin: '20% 20% 10%',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}>
        <fieldset>
          <h2>Forgot PassWord</h2>
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
            value={Newpassword}
            onChange={(e)=>{
              setNewpassword(e.target.value)
            }}
            placeholder="NewPassword" 
              required
            />
          </div>
          <div className="Field">
            <label>Enter Your Secret answer <sup>*</sup></label>
            <input type="text"
            value={answer}
            onChange={(e)=>{
              setanswer(e.target.value)
            }}
            placeholder="Secret answer" 
              required
            />
          </div>
            
          <div>
          <button className="mb-3" type="submit">
            Reset
          </button>
          
          </div>
        </fieldset>
      </form>
    </div>
  </Layout>
  )
}

export default Forget
