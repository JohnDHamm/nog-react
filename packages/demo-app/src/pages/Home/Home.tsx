import React from 'react';
import { Link } from 'react-router-dom';
import { Info, StyledPage } from './Home.styles';
import { ContentContainer } from 'design-system';

const Home: React.FC = () => {
  return (
    <StyledPage>
      <ContentContainer>
        <h3>Nog Logo goes here</h3>
        <Info>
          The approach will not be easy. You are required to maneuver straight
          down this trench and skim the surface to this point. The target area
          is only two meters wide. It’s a small thermal exhaust port, right
          below the main port. The shaft leads directly to the reactor system. A
          precise hit will start a chain reaction which should destroy the
          station. Only a precise hit will set up a chain reaction. The shaft is
          ray-shielded, so you’ll have to use proton torpedoes. That’s
          impossible, even for a computer. It’s not impossible. I used to
          bull’s-eye womp rats in my T-sixteen back home. They’re not much
          bigger than two meters. Man your ships! And may the Force be with you!
        </Info>
        <Link to="/create">Start demo</Link>
      </ContentContainer>
    </StyledPage>
  );
};

export default Home;
