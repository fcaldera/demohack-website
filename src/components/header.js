import PropTypes from 'prop-types';
import React from 'react';
import Navigation from './navigation';
import { Box } from 'rebass';

const Header = ({ siteTitle }) => (
  <Box as="header" py={3}>
    <Navigation />
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
