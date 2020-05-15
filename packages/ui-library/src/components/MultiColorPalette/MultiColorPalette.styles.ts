import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 456px;
  /* border: 1px dashed green; */
`;

export const CurrentColor = styled.div<{ value: string; isEditable: boolean }>`
  height: 84px;
  width: 84px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: ${props => props.value};
  box-shadow: 0 0 0 2px grey;

  &:hover {
    cursor: ${props => (props.isEditable ? 'crosshair' : 'default')};
  }
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

export const PickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  /* border: 1px dashed grey; */
`;

export const SlidersContainer = styled.div`
  width: 270px;
  /* border: 1px dashed red; */
`;

const Range = styled.div`
  height: 15px;
  width: 100%;
`;

export const HueRange = styled(Range)`
  background: linear-gradient(90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
`;

export const LuminRange = styled(Range)<{ value: string }>`
  background: linear-gradient(90deg, #000, ${props => props.value}, #fff);
`;

export const StyledInput = styled.input.attrs({
  type: 'range',
})`
  width: 100%;
  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
