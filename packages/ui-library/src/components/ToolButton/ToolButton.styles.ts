import styled from 'styled-components';
import { COLORS } from 'design-system';

export const StyledButton = styled.button`
  border: 1px solid ${COLORS.GREY};
  height: 32px;
  width: 140px;
  border-radius: 16px;
  background: none;
  padding-top: 2px;
  padding-bottom: 0px;
  padding-left: 5px;

  &:hover {
    border-color: ${COLORS.BADASS};
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div<{ width?: number }>`
  width: ${props => (props.width ? props.width + 'px' : '24px')};

  path {
    fill: ${COLORS.GREY};

    ${StyledButton}:hover & {
      fill: ${COLORS.BADASS};
    }
  }
`;

export const StyledLabel = styled.p`
  margin: 0;
  padding-left: 0.35rem;
  padding-bottom: 4px;
  color: ${COLORS.GREY};
  font-size: 1.25rem;

  ${StyledButton}:hover & {
    color: ${COLORS.BADASS};
  }
`;
