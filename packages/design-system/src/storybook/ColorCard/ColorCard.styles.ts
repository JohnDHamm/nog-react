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

export const ColorBlock = styled.div<{ value: string; useBorder: boolean }>`
  border: ${props => (props.useBorder ? '1px solid #ccc' : 'none')};
  background-color: ${props => props.value};
  height: 100px;
`;

export const ColorText = styled.p<{ value: string }>`
  color: ${props => (props.value !== '#fff' ? props.value : '#777')};
  text-align: right;
`;
