import styled from 'styled-components';
import { COLORS } from 'design-system';

export const Container = styled.div<{ height: number; width: number }>`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  position: relative;
  border-left: 0.5px solid ${COLORS.SONG_GREY};
  border-right: 0.5px solid ${COLORS.SONG_GREY};
`;

export const StaffBackground = styled.div<{ height: number; width: number }>`
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  position: absolute;
  top: 0;
  left: 0;
`;

export const BarNumber = styled.div<{ isCurrentBar: boolean }>`
  position: absolute;
  left: 5px;
  top: -20px;
  font-size: 1rem;
  color: ${props => (props.isCurrentBar ? COLORS.BADASS : COLORS.SONG_GREY)};
`;

export const Note = styled.div<{ width: number; left: number; bottom: number }>`
  position: absolute;
  bottom: ${props => props.bottom + 'px'};
  left: ${props => props.left + 'px'};
  width: ${props => props.width + 'px'};
`;

export const LyricText = styled.div<{
  left: number;
  bottom: number;
  isCurrent: boolean;
}>`
  position: absolute;
  bottom: ${props => props.bottom + 'px'};
  left: ${props => props.left + 'px'};
  transform: translateX(-50%);
  font-size: 1rem;
  color: ${props => (props.isCurrent ? COLORS.BADASS : COLORS.SONG_GREY)};
`;
