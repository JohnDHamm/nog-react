import styled from 'styled-components';

export const StyledIcon = styled.svg<{
  width: number;
  fill?: string;
  hoverFill?: string;
}>`
  width: ${props => props.width + 'px'};
  fill: ${props => (props.fill ? props.fill : 'black')};

  &:hover {
    cursor: pointer;
    fill: ${props => (props.hoverFill ? props.hoverFill : props.fill)};
  }
`;
