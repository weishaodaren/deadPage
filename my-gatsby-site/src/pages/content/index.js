import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../../components/layout';

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          two
          three
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { two, three },
    },
  } = data;
  return (
    <Layout>
      <Helmet title={'fucktheworld'} />
      <Link to="/">Back</Link>
      {[two, three].map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </Layout>
  );
};

export default Content;
