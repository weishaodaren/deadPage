import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const SPLIT_STRING = `@_weishaodaren_@`;

const Pp = styled.p`
  color: #126;
  font-style: italic;
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          content
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { content },
    },
  } = data;

  return (
    <Layout>
      <Helmet title="weishaodaren_" />
      <h1>
        Hello.
        <span role="img" aria-label="wave">
          👋
        </span>
      </h1>
      <div>
        <h5>
          {`This is  `}
          <a href="https://github.com/weishaodaren">
            weishaodaren_ / 赵嘉伟
            <span role="img" aria-label="left">
              👈
            </span>
          </a>
        </h5>
        {content.split(SPLIT_STRING).map((item, index) => (
          <Pp key={index}>{item}</Pp>
        ))}
      </div>
      <Link to="/content">load ...</Link>
    </Layout>
  );
};

export default IndexPage;
