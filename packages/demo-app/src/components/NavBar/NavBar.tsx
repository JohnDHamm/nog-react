import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LogoContainer,
  ProfileAvatar,
  ProfileText,
  Row,
  StyledContainer
} from './NavBar.styles';
import { NogLogo } from 'ui-library';
import { COLORS } from 'design-system';

const GuestAvatar = require('../../assets/guest_avatar.png');

const NavBar: React.FC = () => {
  const history = useHistory();

  const handleLogoClick = (): void => {
    history.push('/');
  };

  return (
    <StyledContainer>
      <LogoContainer onClick={handleLogoClick}>
        <NogLogo borderColor={COLORS.WHITE} lettersColor={COLORS.WHITE} />
      </LogoContainer>
      <Row>
        <ProfileText>Guest</ProfileText>
        <ProfileAvatar src={GuestAvatar} alt="Guest avatar" />
      </Row>
    </StyledContainer>
  );
};

export default NavBar;
