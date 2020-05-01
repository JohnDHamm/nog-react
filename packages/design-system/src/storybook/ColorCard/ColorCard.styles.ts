import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #888;
  width: 200px;
  padding: 0 1rem;
  margin: 1rem;
`;

export const Title = styled.h3`
  color: #555;
`;

export const ColorBlock = styled.div<{ value: string }>`
  border: ${props => (props.value === '#FFF' ? '1px solid #CCC' : 'none')};
  background-color: ${props => props.value};
  height: 100px;
`;

export const ColorText = styled.p<{ value: string }>`
  color: ${props => (props.value !== '#FFF' ? props.value : '#777')};
  text-align: right;
`;
