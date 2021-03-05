import styled from 'styled-components';

export const Container = styled.div<{ width: number }>`
  position: relative;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 4rem;
  width: ${props => props.width + 'px'};
  /* border: 1px dashed red; */
  padding-right: 2rem;
`;
