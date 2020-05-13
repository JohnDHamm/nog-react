import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 456px;
  /* border: 1px dashed red; */
`;

export const CurrentColor = styled.div<{ value: string }>`
  height: 84px;
  width: 84px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${props => props.value};
  box-shadow: 0 0 0 2px grey;
`;

export const ColorWellsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ColorRow = styled.div`
  display: flex;
`;

export const ColorWell = styled.div<{ value: string }>`
  height: 40px;
  width: 40px;
  border: 1px dotted grey;
  border-radius: 50%;
  margin: 0 2px;
  background-color: ${props => props.value};
  font-size: 1.9rem;
  font-weight: 100;
  text-align: center;
  color: grey;

  &:hover {
    cursor: pointer;
  }
`;
