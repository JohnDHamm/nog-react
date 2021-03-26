import React from 'react';
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
  return (
    <StyledContainer data-testid={testid}>
      <a href={'/'} data-testid={subtestId('HomeLink')}>
        <LogoContainer>
          <NogLogo
            hasBackground={false}
            borderColor={COLORS.WHITE}
            lettersColor={COLORS.WHITE}
          />
        </LogoContainer>
      </a>
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
