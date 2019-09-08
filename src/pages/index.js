import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Flex, Text, Box, Button, Card, Heading } from 'rebass';
import illustration from '../images/hero.png';
import LookBackground from '../images/look-background.png';
import SafetyCard from '../images/safety-card.png';
import LocalCard from '../images/local-card.png';
import HealthCard from '../images/health-card.png';
import EducationCard from '../images/education-card.png';
import EconomicsCard from '../images/economics-card.png';
import Chart from '../images/chart.svg';
import Engagement from '../images/engagement.svg';
import styled from '@emotion/styled';

import Search from '../images/search.svg';
import Clipboard from '../images/clipboard.svg';
import Board from '../images/board.svg';

import GroupChat from '../images/group-chat.svg';
import AirBallon from '../images/air-ballon.svg';
import Group from '../images/group.svg';
import Heart from '../images/heart.svg';
import Sort from '../images/sort.svg';
import Stamp from '../images/stamp.svg';

import Avatar from 'react-avatar';
import Container from '../components/container';

const Hero = styled(Box)`
  background-image: url(${illustration});
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: bottom right;
  padding-top: 100px;
  padding-bottom: 140px;
`;

const HeroHeading = styled(Text)`
  font-size: 64px;
  line-height: 1.125;
`;

const SmallAvatar = styled(Avatar)`
  z-index: ${props => props.zIndex};
  margin-left: ${props => props.marginLeft};
`;

const LookHero = styled(Box)`
  background-color: 'none';
  background-image: url(${LookBackground});
  background-size: 712px 600px;
  background-position: top right;
  background-repeat: no-repeat;
`;

const ImageAvatar = styled(Flex)`
  border-radius: 100%;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  margin-bottom: 0;
`;

const ImageCard = ({ img, title, description, color }) => {
  return (
    <Flex width="344px" m={3}>
      <Card>
        <ImageAvatar bg={color} mb={5}>
          <Img src={img} height="24" width="24"/>
        </ImageAvatar>
        <Text as="h3">{title}</Text>
        <Text as="p" fontSize={1}>
          {description}
        </Text>
      </Card>
    </Flex>
  );
};

const CommentCard = ({ img, title, description }) => {
  return (
    <Flex width="272px" m={3}>
      <Card>
        <img width="32px" height="32px" src={img} alt="group-chat" />
        <Text as="h3" fontSize={3} mb={3}>
          {title}
        </Text>
        <Text as="p" fontSize={2} color="gray600">
          {description}
        </Text>
      </Card>
    </Flex>
  );
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero bg="lightYellow">
      <Container>
        <Box maxWidth="512px">
          <HeroHeading>
            Join a Single Purpose Party to Rally A Causes
          </HeroHeading>
          <Text as="p" fontSize="18px" lineHeight="32px" pb={4}>
            Big changes happen from one person. Join and crowdfund a cause you
            believe in and help to shape the future of your country.
          </Text>
          <Flex pb={8} alignItems="center">
            <Box>
              <SmallAvatar
                round
                size="40px"
                marginLeft="-0px"
                src="https://i.pravatar.cc/300"
              />
              <SmallAvatar
                round
                size="40px"
                marginLeft="-10px"
                src="https://i.pravatar.cc/300?v1"
              />
              <SmallAvatar
                round
                size="40px"
                marginLeft="-10px"
                src="https://i.pravatar.cc/300?v2"
              />
            </Box>
            <Flex alignItems="center">
              <Text fontSize="32px" mr={2} lineHeight="1">
                56K
              </Text>
              <Text
                fontSize="14px"
                lineHeight="16px"
                color="#6B6B70"
                width="100px"
              >
                Peolple funded causes
              </Text>
            </Flex>
          </Flex>
          <Button>Explore ideas</Button>
        </Box>
      </Container>
    </Hero>
    <Container my={8}>
      <Flex justifyContent="space-between" align-items="center">
        <ImageCard
        img={Search}
          color="yellow"
          title="Find a cause"
          description="Discover the causes you believe in"
        />
        <ImageCard
        img={Board}
          color="lightblue"
          title="Pack the cause"
          description="Back the cause by either becoming a member or through a donation. "
        />
        <ImageCard
        img={Clipboard}
          color="pink"
          title="Track the progress of forming party"
          description="Causes with at least 500 members will convert into a single cause political party. If the cause doesn't reach 500 members within three months then your money will be refunded"
        />
      </Flex>
    </Container>
    <Flex my={8}>
      <Flex flex={1} justifyContent="flex-end">
        <Img src={Chart} />
      </Flex>
      <Flex flex={1} justifyContent="flex-start">
        <Flex
          width="562px"
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Heading as="h1" fontSize="50px" mb={3}>
            Join the power of people to make important changes happen
          </Heading>
          <Text as="p" fontSize="18px">
            There are important issues that could shape the future of our
            country. Join likeminded people and help to make those changes
            happen.
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Container my={8}>
      <Flex justifyContent="space-between" align-items="center">
        <img src={EducationCard} alt="safety" />
        <img src={EconomicsCard} alt="safety" />
        <img src={SafetyCard} alt="safety" />
        <img src={LocalCard} alt="safety" />
        <img src={HealthCard} alt="safety" />
      </Flex>
    </Container>
    <LookHero height="600px">
      <Container height="100%">
        <Flex
          width="562px"
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Heading as="h1" fontSize="50px" mb={3}>
            Convert the cause <br />
            into a part.
          </Heading>
          <Text as="p" fontSize="18px">
            A cause with at least 500 members will be converted into a political
            party.
          </Text>
        </Flex>
      </Container>
    </LookHero>
    <Container my={8} wid>
      <Text as="h1" fontSize={5}>
        Participate your way
      </Text>
      <Flex width="950px" ml={12} my={8} flexWrap="wrap">
        <CommentCard
          img={Heart}
          title="Donate"
          description="Sit cras auctor tellus ullamcorper tempor pulvinar enim, vestibulum"
        />
        <CommentCard
          img={Group}
          title="Become a member"
          description="You can show your support by joining the party with a small membership fee."
        />
        <CommentCard
          img={AirBallon}
          title="Share & recruit"
          description="You can support the cause by spreading the word."
        />
        <CommentCard
          img={GroupChat}
          title="Join the community"
          description="You can join the discussions on your party profile page and meet like-minded people. "
        />
        <CommentCard
          img={Sort}
          title="Track the progress"
          description="You can follow the progress and get updates about how your party is moving towards your common goal. "
        />
        <CommentCard
          img={Stamp}
          title="Create"
          description="If you have a cause that you want to kickstart a single-issue political party then set up a campaign and gather members! 
          "
        />
      </Flex>
    </Container>
    <Flex my={8}>
      <Flex flex={1} justifyContent="flex-end">
        <Img src={Engagement} />
      </Flex>
      <Flex flex={1} justifyContent="flex-start">
        <Flex
          width="562px"
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Heading as="h1" fontSize="50px" mb={3}>
            Follow the progress <br />
            and engage{' '}
          </Heading>
          <Text as="p" fontSize="18px">
            Now that you are a member or a donor of a single-issue party, you
            can follow the progress, <br /> participate in the discussions and
            give donations to the party standing for your cause.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  </Layout>
);

export default IndexPage;
