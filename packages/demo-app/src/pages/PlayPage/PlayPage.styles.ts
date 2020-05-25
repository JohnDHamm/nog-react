import styled from 'styled-components';
import { COLORS } from 'design-system';

export const Page = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.BACKGROUND_GREY};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const SliderContainer = styled.div`
  position: relative;
  margin: 3rem 0 2rem 0;
`;

const getLeftPosition = (value: number) => {
  return `calc(${value}% - ${value * 0.28}px)`;
};

export const SliderLabel = styled.div<{ value: number }>`
  position: absolute;
  top: -1.75rem;
  left: ${props => getLeftPosition(props.value)};
  color: ${COLORS.BADASS};
  font-size: 1.25rem;
`;

export const Slider = styled.input`
  width: 300px;
`;
