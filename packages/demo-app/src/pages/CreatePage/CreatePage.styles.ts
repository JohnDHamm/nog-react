import styled from 'styled-components';
import { COLORS } from 'design-system';

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: ${COLORS.BLACK};
`;

export const PatternTitle = styled.div`
  color: ${COLORS.WHITE};
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  background: #1a1a1a;
`;
