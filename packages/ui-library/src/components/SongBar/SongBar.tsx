import React from 'react';
import { COLORS } from 'design-system';
import {
  BarNumber,
  Container,
  LyricText,
  Note,
  StaffBackground,
} from './SongBar.styles';
import SongNote from '../SongNote/SongNote';
import SongStaff from '../SongStaff/SongStaff';

declare global {
  interface Lyric {
    timePosition: number;
    text: string;
  }

  interface Note {
    type: 'note' | 'rest';
    timePosition: number;
    scalePosition: number;
    length: NoteLength;
    noteKey?: NoteKey;
  }

  interface Bar {
    barNumber: number;
    notes: Note[];
    lyrics: Lyric[];
  }
}

interface BarDisplayProps {
  height: number;
  width: number;
  beatsPerBar?: number;
  isCurrentBar: boolean;
  currentTimePosition?: number | undefined;
}

type SongBarProps = Bar & BarDisplayProps;

const SongBar: React.FC<SongBarProps> = ({
  barNumber,
  beatsPerBar = 4,
  notes,
  lyrics,
  height,
  width,
  isCurrentBar,
  currentTimePosition,
}) => {
  const noteWidth = height * 0.8125;
  const sixteenthNoteSpacing = width / (beatsPerBar * 4 + 3);
  const initialTimePosition = 2 * sixteenthNoteSpacing;
  const noteTimeOffset = -(height * 0.4125);
  const scaleSpacing = height / 8;
  const initialScalePosition = -(height * 0.6625);

  const renderNotes = (): JSX.Element[] => {
    return notes.map(note => {
      const leftPosition =
        (note.timePosition - 1) * sixteenthNoteSpacing +
        initialTimePosition +
        noteTimeOffset;

      const bottomPosition =
        note.type === 'note'
          ? initialScalePosition + (note.scalePosition - 1) * scaleSpacing
          : -(height * 0.3125);

      let ledgerLine: LedgerLine = undefined;
      switch (note.scalePosition) {
        case 1:
          ledgerLine = 'through';
          break;
        case 13:
          ledgerLine = 'through';
          break;
        case 14:
          ledgerLine = 'below';
          break;
        default:
          ledgerLine = undefined;
      }

      return (
        <Note
          width={noteWidth}
          left={leftPosition}
          bottom={bottomPosition}
          key={note.timePosition}
        >
          <SongNote
            type={note.type}
            length={note.length}
            ledgerLine={ledgerLine}
            noteKey={note.noteKey}
            color={
              note.timePosition === currentTimePosition
                ? COLORS.BADASS
                : undefined
            }
          />
        </Note>
      );
    });
  };

  const renderLyrics = (): JSX.Element[] => {
    return lyrics.map(lyric => {
      const leftPosition =
        (lyric.timePosition - 1) * sixteenthNoteSpacing + initialTimePosition;
      const bottomPosition = -(height * 0.75);
      return (
        <LyricText
          key={lyric.text}
          left={leftPosition}
          bottom={bottomPosition}
          isCurrent={lyric.timePosition === currentTimePosition}
        >
          {lyric.text}
        </LyricText>
      );
    });
  };

  return (
    <Container height={height} width={width}>
      <BarNumber isCurrentBar={isCurrentBar}>{barNumber}</BarNumber>
      <StaffBackground height={height} width={width}>
        <SongStaff height={height} width={width} />
      </StaffBackground>
      {renderNotes()}
      {renderLyrics()}
    </Container>
  );
};

export default SongBar;
