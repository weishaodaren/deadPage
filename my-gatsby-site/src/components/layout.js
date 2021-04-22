import React, {
  Fragment,
  Children,
  useState,
  useLayoutEffect,
  cloneElement,
  useEffect,
} from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;

  h1 {
    color: ${(props) => props.titleColor};
  }
  h5 {
    color: ${(props) => props.titleColor};
  }
  p {
    color: ${(props) => props.paragraphColor};
  }
  a {
    color: ${(props) => props.aColor};
  }
`;

const SwitchIcon = styled.div`
  position: absolute;
  right: 50%;
  transform: scale(1.2);
  color: red;

  &:hover {
    cursor: pointer;
  }
`;

export default function Layout({ children }) {
  const [state, setState] = useState(true);

  useLayoutEffect(() => {
    if (!state) document.body.style.backgroundColor = '#282C35';
    else document.body.style.backgroundColor = '#fff';
  }, [state]);

  return (
    <Fragment>
      <SwitchIcon onClick={() => setState(!state)}>
        {state ? '🌚' : '🌞'}
      </SwitchIcon>
      <LayoutStyle
        titleColor={state ? '#222222' : '#FFFFFF'}
        color={state ? '#FFA7C4' : '#222222'}
        paragraphColor={state ? '#222222' : '#FFA7C4'}
        aColor={state ? '#D23669' : 'pink'}
      >
        {children}
      </LayoutStyle>
    </Fragment>
  );
}
