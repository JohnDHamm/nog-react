import styled from 'styled-components';
import { COLORS, FONTS } from 'design-system';

export const StyledWrapper = styled.div<{ altStyle?: boolean }>`
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: ${props => (props.altStyle ? 'navy' : COLORS.BADASS)};
  padding: 0.5rem 1rem;
`;

export const StyledText = styled.span<{ altStyle?: boolean }>`
  font-family: ${FONTS.SECONDARY};
  font-size: 1.5rem;
  color: ${props => (!props.altStyle ? 'navy' : 'white')};
`;
