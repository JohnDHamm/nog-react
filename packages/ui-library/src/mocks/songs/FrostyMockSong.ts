export const FrostyMockSong: Song = {
  name: 'Frosty the Snowman',
  tempo: 120,
  timeSignature: '4:4',
  bars: [
    {
      barNumber: 1,
      notes: [
        {
          timePosition: 1,
          length: 'half',
          scalePosition: 5,
          type: 'note',
        },
        {
          timePosition: 9,
          length: 'quarter-dotted',
          scalePosition: 3,
          type: 'note',
        },
        {
          timePosition: 15,
          length: 'eighth',
          scalePosition: 4,
          type: 'note',
        },
      ],
      lyrics: [
        {
          timePosition: 1,
          text: 'Frost',
        },
        {
          timePosition: 5,
          text: '-',
        },
        {
          timePosition: 9,
          text: 'y',
        },
        {
          timePosition: 15,
          text: 'the',
        },
      ],
    },
    {
      barNumber: 2,
      notes: [
        {
          timePosition: 1,
          length: 'quarter',
          scalePosition: 5,
          type: 'note',
        },
        {
          timePosition: 5,
          length: 'half',
          scalePosition: 8,
          type: 'note',
        },
        {
          timePosition: 13,
          length: 'eighth',
          scalePosition: 7,
          type: 'note',
        },
        {
          timePosition: 15,
          length: 'eighth',
          scalePosition: 8,
          type: 'note',
        },
      ],
      lyrics: [
        {
          timePosition: 1,
          text: 'snow',
        },
        {
          timePosition: 3,
          text: '-',
        },
        {
          timePosition: 5,
          text: 'man',
        },
        {
          timePosition: 13,
          text: 'was',
        },
        {
          timePosition: 15,
          text: 'a',
        },
      ],
    },
    {
      barNumber: 3,
      notes: [
        {
          timePosition: 1,
          length: 'quarter',
          scalePosition: 5,
          type: 'note',
        },
        {
          timePosition: 5,
          length: 'quarter',
          scalePosition: 5,
          type: 'note',
        },
        {
          timePosition: 9,
          length: 'quarter',
          scalePosition: 5,
          type: 'note',
        },
        {
          timePosition: 13,
          length: 'quarter',
          scalePosition: 5,
          type: 'note',
        },
      ],
      lyrics: [
        {
          timePosition: 1,
          text: 'jol',
        },
        {
          timePosition: 3,
          text: '-',
        },
        {
          timePosition: 5,
          text: 'ly',
        },
        {
          timePosition: 9,
          text: 'hap',
        },
        {
          timePosition: 11,
          text: '-',
        },
        {
          timePosition: 13,
          text: 'py',
        },
      ],
    },
  ],
};
