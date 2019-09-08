import React from 'react';
import { Box } from 'rebass';

const Container = ({ children }) => (
  <Box maxWidth="1136px" mx="auto">
    {children}
  </Box>
);

export default Container;
