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

export const SliderLabel = styled.div<{ value: number }>`
  position: absolute;
  top: -1.75rem;
  left: calc(${props => props.value + '%'} - 12px);
  color: ${COLORS.BADASS};
  font-size: 1.25rem;
`;

export const Slider = styled.input`
  width: 300px;
`;
