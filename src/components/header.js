import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Headroom from 'headroom.js';
import { Box } from 'rebass';

import Navigation from './navigation';

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;

  &.headroom {
    will-change: transform;
    transition: transform 200ms linear;
  }
  &.headroom--pinned {
    transform: translateY(0%);
  }
  &.headroom--unpinned {
    transform: translateY(-100%);
  }

  &.headroom--not-top {
    background-color: #FFE6C1;
  }
`;

const Header = () => {

  useEffect(() => {
    // grab an element
    const myElement = document.querySelector('#header');
    // construct an instance of Headroom, passing the element
    const headroom = new Headroom(myElement);
    // initialise
    headroom.init();
  }, []);

  return (
    <Wrapper id="header">
      <Box as="header" py={3}>
        <Navigation />
      </Box>
    </Wrapper>
  );
};


export default Header;
