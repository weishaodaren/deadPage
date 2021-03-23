import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <Link to="/content">this is index</Link>
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
        <Link to="/content/about">Go to About</Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
