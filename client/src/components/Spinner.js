import React,{useState,useEffect} from "react";
import { useNavigate ,useLocation} from "react-router-dom";
const Spinner = ({path="login"}) => {
  const [count,setcount]=useState(5);
  const Navigate=useNavigate();
  const location=useLocation();


    useEffect(()=>{
      const Interval=setInterval(() =>{
        setcount((prevValue)=>prevValue-1);
      },1000);

      count === 0 && Navigate(`/${path}`,{
        state:location.pathname
      });
      return ()=>clearInterval(Interval);
    },[count,Navigate,location]);
        
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <h1 className="Text-center">Redirecting to you in {count} second</h1>
      <div className="spinner-border" role="status"></div>
      <span className="visually-hidden">Loading...</span>
    </div>
    
  );
};

export default Spinner;
