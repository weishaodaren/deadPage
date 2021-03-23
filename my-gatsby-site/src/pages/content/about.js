import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';

const Transfer = styled.div`
  width: 300px;
  height: 300px;
  border: 2px dotted #126;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
const About = () => (
  <Layout>
    <Transfer>
      <Helmet title="About" />
      <Link to={'/'}>Back Home</Link>
    </Transfer>
  </Layout>
);

export default About;
