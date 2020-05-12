import React from 'react';
import {
  Logo,
  ProfileAvatar,
  ProfileText,
  Row,
  StyledContainer,
} from './DemoNavBar.styles';
// import GuestAvatar from '../../assets/guest_avatar.png';
const GuestAvatar = require('../../assets/guest_avatar.png');
const NogLogo = require('../../assets/logo_white.svg');

interface NavBarProps {
  onLogoClick: () => void;
}

const DemoNavBar: React.FC<NavBarProps> = ({ onLogoClick }) => {
  return (
    <StyledContainer>
      <Logo src={NogLogo} alt="logo" onClick={onLogoClick} />
      <Row>
        <ProfileText>Guest</ProfileText>
        <ProfileAvatar src={GuestAvatar} />
      </Row>
    </StyledContainer>
  );
};

export default DemoNavBar;
