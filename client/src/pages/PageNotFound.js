// PageNotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="page-not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Go back to <Link to="/">home</Link>.
      </p>
    </div>
    </Layout>
  );
};

export default PageNotFound;
