import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledButton = styled.button<{ disabled: boolean }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.disabled ? COLORS.TEXT : COLORS.GREY)};
  height: 32px;
  width: 140px;
  border-radius: 16px;
  background: none;
  padding-top: 2px;
  padding-bottom: 0px;
  padding-left: 5px;

  &:hover {
    border-color: ${props => (props.disabled ? COLORS.TEXT : COLORS.BADASS)};
    cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  }
`;

export const IconWrapper = styled.div<{ width?: number; disabled: boolean }>`
  width: ${props => (props.width ? props.width + 'px' : '24px')};

  path {
    fill: ${props => (props.disabled ? COLORS.TEXT : COLORS.GREY)};

    ${StyledButton}:hover & {
      fill: ${props => (props.disabled ? COLORS.TEXT : COLORS.BADASS)};
    }
  }
`;

export const StyledLabel = styled.p<{ disabled: boolean }>`
  margin: 0;
  padding-left: 0.35rem;
  padding-bottom: 4px;
  color: ${props => (props.disabled ? COLORS.TEXT : COLORS.GREY)};
  font-size: 1.25rem;

  ${StyledButton}:hover & {
    color: ${props => (props.disabled ? COLORS.TEXT : COLORS.BADASS)};
  }
`;
