import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Pelement = styled.p`
  margin-top: 20px;
  color: #126;
  font-weight: bolder;
  font-style: italic;
`;

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          one
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: { one },
    },
  } = data;

  return (
    <Layout>
      <Link to="/">Go Back</Link>
      <Pelement>{one}</Pelement>
    </Layout>
  );
};

export default NotFoundPage;
