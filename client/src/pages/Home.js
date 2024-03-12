// Home.js
import React from "react";
import { useAuth } from "../context/Authentication.js"; 
import Layout from "../components/Layout/Layout.js";

const Home = () => {
  const { auth ,setAuth} = useAuth();

  return (
    <Layout>
      <div>
      <h1>Home Page</h1>
      <pre>
      {JSON.stringify(auth,null,4)};
      </pre>
    </div>
    </Layout>
  );
};

export default Home;
