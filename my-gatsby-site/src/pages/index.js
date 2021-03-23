import * as React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="weishaodaren_" />
      <h1>Hello</h1>
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
