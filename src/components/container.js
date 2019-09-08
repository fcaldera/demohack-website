import React from 'react';
import { Box } from 'rebass';

const Container = ({ children, ...rest }) => (
  <Box maxWidth="1136px" mx="auto" {...rest}>
    {children}
  </Box>
);

export default Container;
