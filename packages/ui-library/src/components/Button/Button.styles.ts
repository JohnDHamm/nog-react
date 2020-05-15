import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledButton = styled.button`
  background-color: ${COLORS.NOG_GREEN};
  color: ${COLORS.WHITE};
  font-size: 1rem;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  }
`;
