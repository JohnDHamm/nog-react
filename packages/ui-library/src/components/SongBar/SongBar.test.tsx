import React from 'react';
import SongBar, { SongBarProps } from './SongBar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { subTestIdInit } from 'function-library';
import { FrostyMockSong } from '../../mocks/songs/FrostyMockSong';

describe('SongBar', () => {
  const testid = 'SongBar';
  const subTestid = subTestIdInit(testid);

  const baseProps: SongBarProps = {
    barNumber: 42,
    notes: FrostyMockSong.bars[0].notes,
    lyrics: FrostyMockSong.bars[0].lyrics,
    isCurrentBar: true,
    height: 75,
    width: 400,
  };

  it('should render', () => {
    render(<SongBar {...baseProps} />);
    expect(
      screen.getByTestId(subTestid(baseProps.barNumber.toString()))
    ).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('BarNumber'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('BarNumber'))).toHaveTextContent(
      baseProps.barNumber.toString()
    );
    expect(screen.getByTestId('SongStaff')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Note-1'))).toBeInTheDocument();
    expect(screen.getByTestId('SongNote-half-note')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Note-9'))).toBeInTheDocument();
    expect(
      screen.getByTestId('SongNote-quarter-dotted-note')
    ).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Note-15'))).toBeInTheDocument();
    expect(screen.getByTestId('SongNote-eighth-note')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-1'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-1'))).toHaveTextContent('Frost');
    expect(screen.getByTestId(subTestid('Lyric-5'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-5'))).toHaveTextContent('-');
    expect(screen.getByTestId(subTestid('Lyric-9'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-9'))).toHaveTextContent('y');
    expect(screen.getByTestId(subTestid('Lyric-15'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-15'))).toHaveTextContent('the');
  });

  it('should render with notes needing ledger lines and rests', () => {
    const testNotes: Note[] = [
      {
        timePosition: 1,
        length: 'half',
        scalePosition: 1,
        type: 'note',
      },
      {
        timePosition: 9,
        length: 'quarter-dotted',
        scalePosition: 13,
        type: 'note',
      },
      {
        timePosition: 14,
        length: 'sixteenth',
        scalePosition: 7,
        type: 'rest',
      },
      {
        timePosition: 15,
        length: 'eighth',
        scalePosition: 14,
        type: 'note',
      },
    ];

    render(<SongBar {...baseProps} notes={testNotes} />);
    expect(
      screen.getByTestId('SongNote-half-note-throughLedgerLine')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('SongNote-quarter-dotted-note-throughLedgerLine')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('SongNote-eighth-note-belowLedgerLine')
    ).toBeInTheDocument();
    expect(screen.getByTestId('SongNote-SixteenthRest')).toBeInTheDocument();
  });

  it('should render with optional props', () => {
    render(<SongBar {...baseProps} beatsPerBar={3} currentTimePosition={1} />);
    expect(
      screen.getByTestId(subTestid(baseProps.barNumber.toString()))
    ).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('BarNumber'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('BarNumber'))).toHaveTextContent(
      baseProps.barNumber.toString()
    );
    expect(screen.getByTestId('SongStaff')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Note-1'))).toBeInTheDocument();
    expect(screen.getByTestId('SongNote-half-note')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Note-9'))).toBeInTheDocument();
    expect(
      screen.getByTestId('SongNote-quarter-dotted-note')
    ).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Note-15'))).toBeInTheDocument();
    expect(screen.getByTestId('SongNote-eighth-note')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-1'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-1'))).toHaveTextContent('Frost');
    expect(screen.getByTestId(subTestid('Lyric-5'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-5'))).toHaveTextContent('-');
    expect(screen.getByTestId(subTestid('Lyric-9'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-9'))).toHaveTextContent('y');
    expect(screen.getByTestId(subTestid('Lyric-15'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Lyric-15'))).toHaveTextContent('the');
  });
});
