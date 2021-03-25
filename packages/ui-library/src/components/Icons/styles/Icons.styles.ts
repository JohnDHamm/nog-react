import styled from 'styled-components';

export const StyledPath = styled.path<{ color: string; hoverColor?: string }>`
  fill: ${props => props.color};

  &:hover {
    fill: ${props => (props.hoverColor ? props.hoverColor : props.color)};
  }
`;
