import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  background-color: ${COLORS.NOG_RED};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileText = styled.span`
  color: ${COLORS.WHITE};
  padding-right: 0.75rem;
  font-size: 1rem;
`;

export const ProfileAvatar = styled.img`
  height: 30px;
  width: 30px;
`;
