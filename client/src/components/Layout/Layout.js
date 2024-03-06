import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: '100vh' }}>
      <ToastContainer/>
      {props.children}</main>
      <Footer />
    </div>
  );
};


Layout.defaultProps={
  title:'Ecommerce-App SHOP NOW',
  description:'MERN STACK PROJECT',
  keywords:'MERN-REACT_NODE-EXPRESS',
  author:'TUSHAR SHRIVASTAVA'
}

export default Layout;
