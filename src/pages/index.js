import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Text, Box, Button } from 'rebass';
import illustration from '../images/hero.png';
import styled from '@emotion/styled';
import Avatar from 'react-avatar';
import Container from '../components/container';

const Hero = styled(Box)`
  background-color: 'yellow';
  background-image: url(${illustration});
  background-size: cover;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Container>
        <h1>Crowdfund single purpose parties</h1>
        <Text as="p">
          Sit cras auctor tellus ullamcorper tempor pulvinar enim, vestibulum
          massa.
        </Text>
        <Box>
          <Avatar src="https://i.pravatar.cc/300" />
          <Avatar src="https://i.pravatar.cc/300?v1" />
          <Avatar src="https://i.pravatar.cc/300?v2" />
          <Box>56K Peolple funded causes</Box>
        </Box>
        <Button>Explore ideas</Button>
      </Container>
    </Hero>
  </Layout>
);

export default IndexPage;
