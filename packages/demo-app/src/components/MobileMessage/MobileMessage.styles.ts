import styled from 'styled-components';
import { COLORS } from 'design-system';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 4rem;
  width: 80%;
  max-width: 680px;
`;

export const LogoContainer = styled.div`
  width: 50%;
  max-width: 300px;
  margin: 0 auto 2rem;
`;

export const Message = styled.div`
  text-align: center;
  color: ${COLORS.BADASS};
`;
