// Authentication.js
import React, { useState, useContext, useEffect, createContext } from "react";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: ""
  });
  ///DEFAULT AXIOS
  axios.defaults.headers.common["Authorization"]=auth?.token;
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if (data) {
      const parsedata = JSON.parse(data);
      setAuth({
        user: parsedata.user,
        token: parsedata.token,
      });
    }
  }, []); 

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
