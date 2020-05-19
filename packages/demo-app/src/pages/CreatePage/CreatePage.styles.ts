import styled from 'styled-components';
import { COLORS } from 'design-system';

export const Page = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  /* background-color: ${COLORS.BLACK}; */
`;

export const PatternTitle = styled.div`
  color: ${COLORS.WHITE};
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InstanceBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const EmptyInstance = styled.div<{ size: number }>`
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
`;

export const NavBlock = styled.div`
  display: flex;
  width: 400px;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
`;
