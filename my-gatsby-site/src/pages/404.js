import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
  console.log(data, 'data');
  return (
    <main>
      <Link to="/">Go Back</Link>
      {/* <p>{data.site.siteMetadata.one}</p> */}
    </main>
  );
};

export default NotFoundPage;
