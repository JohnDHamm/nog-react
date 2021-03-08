type NoteLength =
  | 'whole'
  | 'half'
  | 'quarter'
  | 'eighth'
  | 'sixteenth'
  | 'whole-dotted'
  | 'half-dotted'
  | 'quarter-dotted'
  | 'eighth-dotted'
  | 'sixteenth-dotted';

type LedgerLine = undefined | 'through' | 'above' | 'below';

type NoteKey = undefined | 'flat' | 'sharp' | 'natural';

type NoteType = 'note' | 'rest';

interface Note {
  type: 'note' | 'rest';
  timePosition: number;
  scalePosition: number;
  length: NoteLength;
  noteKey?: NoteKey;
}

interface Lyric {
  timePosition: number;
  text: string;
}

interface Bar {
  barNumber: number;
  notes: Note[];
  lyrics: Lyric[];
}

type TimeSignature = '3:4' | '4:4';

interface Song {
  name: string;
  tempo: number;
  timeSignature: TimeSignature;
  bars: Bar[];
  audioFileUrl: string;
}
