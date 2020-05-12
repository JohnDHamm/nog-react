import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledPage = styled.div`
  background-color: ${COLORS.WHITE};
  width: 100%;
  height: 100vh;
`;

export const CenteredContent = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

export const StyledLogo = styled.img`
  height: 200px;
`;

export const Info = styled.p`
  color: ${COLORS.TEXT};
  line-height: 1.5rem;
`;
