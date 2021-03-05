import styled from 'styled-components';
import { COLORS } from 'design-system';

const getOffset = (height: number): number => {
  return -(height / 6.4);
};

const TimeNumber = styled.div<{ height: number }>`
  position: absolute;
  right: 10px;
  color: ${COLORS.SONG_GREY};
  font-size: ${props => props.height / 1.41 + 'px'};
`;

export const TimeNumberTop = styled(TimeNumber)<{ height: number }>`
  bottom: ${props => props.height / 2 + getOffset(props.height) + 'px'};
`;

export const TimeNumberBottom = styled(TimeNumber)<{ height: number }>`
  bottom: ${props => getOffset(props.height) + 'px'};
`;
