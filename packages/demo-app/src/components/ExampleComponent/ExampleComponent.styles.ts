import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledWrapper = styled.div`
  border: 1px solid red;
  border-radius: 4px;
  background-color: slateblue;
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: auto;
`;

export const StyledText = styled.span`
  font-size: 1.25rem;
  font-weight: 200;
  color: ${COLORS.BADASS};
`;
