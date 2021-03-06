import React from 'react';
import { Flex, Box, Button, Link } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';
import Container from './container';
import styled from '@emotion/styled';

const Brand = styled(Box)`
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: inline-block;
`;

Brand.defaultProps = {
  as: 'a',
};

const NavLink = styled(Link)`
  color: black;
  font-size: 18px;
  padding: 23px;
  text-decoration: none;
  display: inline-block;
  line-height: 1;
`;

NavLink.defaultProps = {
  as: GatsbyLink,
};

const NavButton = styled(Button)`
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(176, 182, 193, 0.37);
  font-size: 14px;
  line-height: 1;
  padding: 13px 16px;
`;

const SmallNavLink = styled(NavLink)`
  font-size: 14px;
`;

const Navigation = () => (
  <Container>
    <Flex alignItems="center">
      <Brand mr={9} href="/">
        Demcracy.
      </Brand>
      <Box>
        <NavLink to="/">How it works?</NavLink>
      </Box>
      <Box mx="auto" />
      <Box>
        <SmallNavLink to="/">Login</SmallNavLink>
        <NavButton as={Link} to="/" bg="black">
          Join beta
        </NavButton>
      </Box>
    </Flex>
  </Container>
);

export default Navigation;
