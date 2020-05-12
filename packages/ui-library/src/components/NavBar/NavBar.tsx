import React from 'react';
import {
  ProfileAvatar,
  ProfileText,
  Row,
  StyledContainer,
} from './NavBar.styles';
// import GuestAvatar from '../../assets/guest_avatar.png';
const GuestAvatar = require('../../assets/guest_avatar.png');

const NavBar: React.FC = () => {
  return (
    <StyledContainer>
      <div>Nog logo svg</div>
      <Row>
        <ProfileText>Guest</ProfileText>
        <ProfileAvatar src={GuestAvatar} />
      </Row>
    </StyledContainer>
  );
};

export default NavBar;
