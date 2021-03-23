import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Layout from '../../components/layout';

const Content = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <Link to="/">Go to Content</Link>
      <h5>About {data.site.siteMetadata.title}</h5>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

export default Content;
