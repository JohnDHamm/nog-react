import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Logo,
  ProfileAvatar,
  ProfileText,
  Row,
  StyledContainer
} from './NavBar.styles';

const GuestAvatar = require('../../assets/guest_avatar.png');
const NogLogo = require('../../assets/logo_white.svg');

const NavBar: React.FC = () => {
  const history = useHistory();

  const handleLogoClick = (): void => {
    history.push('/');
  };

  return (
    <StyledContainer>
      <Logo src={NogLogo} alt="Nog logo" onClick={handleLogoClick} />
      <Row>
        <ProfileText>Guest</ProfileText>
        <ProfileAvatar src={GuestAvatar} />
      </Row>
    </StyledContainer>
  );
};

export default NavBar;
