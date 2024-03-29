import React from 'react';
import { Container, LogoContainer, Message } from './MobileMessage.styles';
import { NogLogo } from 'ui-library';

export const MobileMessage: React.FC = () => {
  return (
    <Container data-testid="MobileMessage">
      <LogoContainer>
        <NogLogo />
      </LogoContainer>
      <Message>
        To make the most of the features of the Nog app, please use on a screen
        with a width of at least 1280 pixels.
      </Message>
    </Container>
  );
};
