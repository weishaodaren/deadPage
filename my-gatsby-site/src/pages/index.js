import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="weishaodaren_" />
      <h1>Hello. 👋</h1>
      <div>
        <h5>
          This is weishaodaren_ or 赵嘉伟
          <Link to="/content"> do not click here 👈</Link>
        </h5>
        <p>this is fake world!</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
