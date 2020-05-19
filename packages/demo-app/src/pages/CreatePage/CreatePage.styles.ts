import styled from 'styled-components';
import { COLORS } from 'design-system';

export const Page = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: ${COLORS.BACKGROUND_GREY};
`;

export const PatternTitle = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  color: ${COLORS.WHITE};
`;

export const ColorContainer = styled.div`
  position: absolute;
  width: 456px;
  top: 1rem;
  left: calc(50% - 228px);
`;

export const ToolContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  width: 80px;
  height: 160px;
  border: 1px solid grey;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8rem;
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
  width: 480px;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
`;
