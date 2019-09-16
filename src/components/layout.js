/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Box, Link } from 'rebass';
import styled from '@emotion/styled';

import Header from './header';
import Container from './container';

const NavLink = styled(Link)`
  color: gray400;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  line-height: 1;
  margin-right: 24px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <Container>
            <Text as="p">© Democracy Inc. {new Date().getFullYear()}</Text>
            <Text as="p" color="gray600">
              All rights reserved
            </Text>
            <Box my={6}>
              <NavLink to="/">Privacy Policy</NavLink>
              <NavLink to="/">Terms & Condition</NavLink>
              <NavLink to="/">ContactUs</NavLink>
            </Box>
          </Container>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
