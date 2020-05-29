import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  CenteredContent,
  Info,
  LogoWrapper,
  StyledPage
} from './HomePage.styles';
import { ContentContainer } from 'design-system';
import { Button, NogLogo } from 'ui-library';

const HomePage: React.FC = () => {
  const history = useHistory();

  const handleClick = (): void => {
    history.push('/create');
  };

  return (
    <StyledPage>
      <ContentContainer>
        <CenteredContent>
          <LogoWrapper>
            <NogLogo />
          </LogoWrapper>
        </CenteredContent>
        <Info>
          Welcome to Nog! This demo of the web app lets you get a taste for
          what's coming...add custom colors, design your pattern, and see it
          play!
        </Info>
        <Info>
          The Nog ecosystem consists of a web app to create and edit your custom
          patterns, a mobile app to access and interact with patterns (yours,
          the ones included with the app, and others shared from the Nog
          community), and the Nog controller to play the patterns and amaze your
          friends.
        </Info>
        <Info>Enjoy!</Info>
        <CenteredContent>
          <Button onClick={handleClick}>start demo</Button>
        </CenteredContent>
      </ContentContainer>
    </StyledPage>
  );
};

export default HomePage;
