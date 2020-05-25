import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  LogoContainer,
  ProfileAvatar,
  ProfileText,
  Row,
  StyledContainer,
} from './NavBar.styles';
import NogLogo from '../NogLogo/NogLogo';
import { COLORS } from 'design-system';

interface NavBarInterface {
  avatarSrc: string;
  userName: string;
}

const NavBar: React.FC<NavBarInterface> = ({ avatarSrc, userName }) => {
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
        <ProfileText>{userName}</ProfileText>
        <ProfileAvatar src={avatarSrc} alt="Guest avatar" />
      </Row>
    </StyledContainer>
  );
};

export default NavBar;
