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
import { subTestIdInit } from 'function-library';

const testid = 'NavBar';
const subtestId = subTestIdInit(testid);

interface NavBarInterface {
  avatarSrc: string;
  userName: string;
}

const NavBar: React.FC<NavBarInterface> = ({ avatarSrc, userName }) => {
  const history = useHistory();

  //TODO: remove this after adding anchor tag to LogoContainer
  const handleLogoClick = (): void => {
    history.push('/');
  };

  return (
    <StyledContainer data-testid={testid}>
      <LogoContainer
        onClick={handleLogoClick}
        data-testid={subtestId('HomeIcon')}
      >
        <NogLogo
          hasBackground={false}
          borderColor={COLORS.WHITE}
          lettersColor={COLORS.WHITE}
        />
      </LogoContainer>
      <Row>
        <ProfileText data-testid={subtestId('UserName')}>
          {userName}
        </ProfileText>
        <ProfileAvatar
          src={avatarSrc}
          alt="Guest avatar"
          data-testid={subtestId('UserIcon')}
        />
      </Row>
    </StyledContainer>
  );
};

export default NavBar;
