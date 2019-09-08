import React from 'react';
import { Flex, Box, Text, Button, Heading } from 'rebass';
import { Link } from 'gatsby';
import Container from './container';
import styled from '@emotion/styled';

const Brand = styled(Box)`
  font-size: 24px;
  font-weight: bold;
  display: block;
  color: black;
  text-decoration: none;
`;

Brand.defaultProps = {
  as: 'a'
};



const Navigation = () => (
  <Container>
    <Flex py={6} alignItems="center">
      <Brand mr={9} href="/">
        Crowdz.
      </Brand>
      <Box>
        <Link to="/">How it works?</Link>
        <Link to="/">Discover</Link>
        <Link to="/">About</Link>
      </Box>
      <Box mx="auto" />
      <Link to="/" variant="nav" href="#!">
        Login
      </Link>
      <Button as={Link} to="/">
        Join beta
      </Button>
    </Flex>
  </Container>
);

export default Navigation;
