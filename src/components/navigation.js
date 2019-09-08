import React from 'react';
import { Flex, Box, Text, Button } from 'rebass';
import { Link } from 'gatsby';

const Navigation = () => (
<Flex
  px={2}
  alignItems='center'>
  <Text p={2} fontWeight='bold'>Crowdz.</Text>
  <Box>
    <Link to="/">How it works?</Link>
    <Link to="/">Discover</Link>
    <Link to="/">About</Link>
  </Box>
  <Box mx='auto' />
  <Link to="/" variant='nav' href='#!'>
    Login
  </Link>
  <Button as={Link} to="/">Join beta</Button>
</Flex>
)

export default Navigation;

