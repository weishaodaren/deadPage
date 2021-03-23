import React, { Fragment } from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`;

export default function Layout({ children }) {
  return (
    <Fragment>
      <LayoutStyle>{children}</LayoutStyle>
    </Fragment>
  );
}
