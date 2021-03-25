import React from 'react';
import { COLORS } from 'design-system';
import { subTestIdInit } from 'function-library';

export type LedgerLine = undefined | 'through' | 'above' | 'below';

export type NoteKey = undefined | 'flat' | 'sharp' | 'natural';

export type NoteLength =
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

export type NoteType = 'note' | 'rest';

export interface SongNoteProps {
  color?: string;
  type: NoteType;
  length: NoteLength;
  ledgerLine?: LedgerLine;
  noteKey?: NoteKey;
}

const SongNote: React.FC<SongNoteProps> = ({
  color = COLORS.SONG_GREY,
  type,
  length,
  ledgerLine,
  noteKey,
}) => {
  const noteLength = length.split('-')[0];
  const dotted = length.split('-')[1];
  const style1 = { fill: color };
  const style2 = { fill: 'none', stroke: color, strokeMiterlimit: 10 };
  const style3 = { strokeWidth: '0.75px', ...style2 };
  const testid = 'SongNote';
  const subTestid = subTestIdInit(testid);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.37 89.95">
        {type === 'note' && (
          <g
            id="note"
            data-testid={subTestid(
              `${length}-${type}${noteKey ? '-' + noteKey : ''}${
                ledgerLine ? '-' + ledgerLine + 'LedgerLine' : ''
              }`
            )}
          >
            {noteLength === 'whole' || noteLength === 'half' ? (
              <path
                id="openNoteBody"
                style={style1}
                d="M92.93,131.06c-1.4-4.26-7.75-6-14.19-3.9s-10.53,7.27-9.13,11.54,7.75,6,14.19,3.9S94.32,135.32,92.93,131.06Zm-9.79,8.65c-6.44,2.11-12,.4-12.63-1.29s2.55-6.25,9-8.36,11.69-.72,12.4,1.31S89.58,137.6,83.14,139.71Z"
                transform="translate(-52.2 -70.94)"
                data-testid={subTestid('OpenNoteBody')}
              />
            ) : (
              <ellipse
                id="closedNoteBody"
                style={style1}
                cx="81.27"
                cy="134.88"
                rx="12.27"
                ry="8.12"
                transform="translate(-90.15 -38.94) rotate(-18.13)"
                data-testid={subTestid('ClosedNoteBody')}
              />
            )}
            {noteLength !== 'whole' && (
              <line
                id="tail"
                style={style2}
                x1="40.49"
                y1="61.61"
                x2="40.49"
                data-testid={subTestid('Tail')}
              />
            )}
            {noteLength === 'eighth' && (
              <path
                id="eighthFlag"
                style={style1}
                d="M104,123.13c13.68-31.68-9.68-29-11-33.13,0-1.41.11-14.76.11-19.06C94.21,88.6,120.79,92.26,104,123.13Z"
                transform="translate(-52.2 -70.94)"
                data-testid={subTestid('EighthFlag')}
              />
            )}
            {noteLength === 'sixteenth' && (
              <g id="sixteenthFlags" data-testid={subTestid('SixteenthFlag')}>
                <path
                  id="flag"
                  style={style1}
                  d="M104,123.13c11.58-26.35-9.68-22.73-11-26.85,0-1.41.11-8.12.11-12.43C94.59,99.41,119.05,95.13,104,123.13Z"
                  transform="translate(-52.2 -70.94)"
                />
                <path
                  id="flag-2"
                  data-name="flag"
                  style={style1}
                  d="M108.43,100.58C112.06,85.2,93.88,87.38,93,83.1c0-1.41.11-7.86.11-12.16C95.88,87.08,114.27,83.24,108.43,100.58Z"
                  transform="translate(-52.2 -70.94)"
                />
              </g>
            )}
            {dotted && (
              <circle
                id="dot"
                style={style1}
                cx="47.77"
                cy="59.38"
                r="2.47"
                data-testid={subTestid('DottedNote')}
              />
            )}
            {ledgerLine === 'below' ? (
              <line
                id="ledgerLine-below"
                style={style2}
                x1="9.25"
                y1="73.06"
                x2="48.37"
                y2="73.06"
                data-testid={subTestid('LedgerLineBelow')}
              />
            ) : null}
            {ledgerLine === 'through' ? (
              <line
                id="ledgerLine-mid"
                style={style2}
                x1="9.25"
                y1="64.06"
                x2="48.37"
                y2="64.06"
                data-testid={subTestid('LedgerLineThrough')}
              />
            ) : null}
            {ledgerLine === 'above' ? (
              <line
                id="ledgerLine-above"
                style={style2}
                x1="9.25"
                y1="55.06"
                x2="48.37"
                y2="55.06"
                data-testid={subTestid('LedgerLineAbove')}
              />
            ) : null}
            {noteKey === 'flat' && (
              <g id="flat" data-testid={subTestid('FlatKey')}>
                <line style={style3} x1="0.38" y1="73.06" x2="0.38" y2="27.4" />
                <path
                  style={style1}
                  d="M52.91,144c7-3.85,14.59-20.36-.26-16.88C71.36,119.55,66.4,139.19,52.91,144Z"
                  transform="translate(-52.2 -70.94)"
                />
              </g>
            )}
            {noteKey === 'sharp' && (
              <g id="sharp" data-testid={subTestid('SharpKey')}>
                <line
                  style={style3}
                  x1="9.26"
                  y1="39.43"
                  x2="9.26"
                  y2="86.03"
                />
                <line
                  style={style3}
                  x1="3.03"
                  y1="40.69"
                  x2="3.03"
                  y2="87.85"
                />
                <polygon
                  style={style1}
                  points="12.14 55.56 0.13 58.25 0.13 54.56 12.14 51.88 12.14 55.56"
                />
                <polygon
                  style={style1}
                  points="12.14 73.56 0.13 76.25 0.13 72.56 12.14 69.88 12.14 73.56"
                />
              </g>
            )}
            {noteKey === 'natural' && (
              <g id="natural" data-testid={subTestid('NaturalKey')}>
                <line
                  style={style3}
                  x1="0.52"
                  y1="38.41"
                  x2="0.52"
                  y2="75.91"
                />
                <line
                  style={style3}
                  x1="11.77"
                  y1="52.45"
                  x2="11.77"
                  y2="89.95"
                />
                <polygon
                  style={style1}
                  points="12.14 55.56 0.13 58.25 0.13 54.56 12.14 51.88 12.14 55.56"
                />
                <polygon
                  style={style1}
                  points="12.14 73.56 0.13 76.25 0.13 72.56 12.14 69.88 12.14 73.56"
                />
              </g>
            )}
          </g>
        )}
        {type === 'rest' && (
          <g id="rest">
            {noteLength === 'whole' && (
              <rect
                id="wholeRest"
                style={style1}
                x="18.69"
                y="18.55"
                width="21.98"
                height="7.03"
                data-testid={subTestid('WholeRest')}
              />
            )}
            {noteLength === 'half' && (
              <rect
                id="halfRest"
                style={style1}
                x="18.69"
                y="30.51"
                width="21.98"
                height="7.03"
                data-testid={subTestid('HalfRest')}
              />
            )}
            {noteLength === 'quarter' && (
              <path
                id="quarterRest"
                style={style1}
                d="M78.84,79.59s6.61,9.9,10,14.39c-12.37,14-2.78,19.68-1.93,23.37-2.91-.86-10.82-4-4.75,12.59-12.71-15.68-6.07-19.46.66-17.27-3.38-4.43-4.37-5.82-7.08-9.79C85.19,94,78.84,79.59,78.84,79.59Z"
                transform="translate(-52.2 -70.94)"
                data-testid={subTestid('QuarterRest')}
              />
            )}
            {noteLength === 'eighth' && (
              <g id="eighthRest" data-testid={subTestid('EighthRest')}>
                <line style={style2} x1="25.75" y1="53.63" x2="36" y2="21.79" />
                <circle style={style1} cx="24.69" cy="25.03" r="4.42" />
                <path
                  style={style2}
                  d="M88.21,92.73c-.76,2.36-5.55,7.14-11.32,7.14"
                  transform="translate(-52.2 -70.94)"
                />
              </g>
            )}
            {noteLength === 'sixteenth' && (
              <g id="sixteenthRest" data-testid={subTestid('SixteenthRest')}>
                <line style={style2} x1="25.75" y1="53.63" x2="36" y2="21.79" />
                <circle style={style1} cx="24.69" cy="25.03" r="4.42" />
                <path
                  style={style2}
                  d="M88.21,92.73c-.76,2.36-5.55,7.14-11.32,7.14"
                  transform="translate(-52.2 -70.94)"
                />
                <line
                  style={style2}
                  x1="31.56"
                  y1="35.6"
                  x2="41.81"
                  y2="3.77"
                />
                <circle style={style1} cx="30.49" cy="7" r="4.42" />
                <path
                  style={style2}
                  d="M94,74.71c-.76,2.36-5.54,7.13-11.31,7.13"
                  transform="translate(-52.2 -70.94)"
                />
              </g>
            )}
            {dotted && (
              <circle
                id="dot-2"
                data-name="dot"
                style={style1}
                cx="42.97"
                cy="27.83"
                r="2.47"
                data-testid={subTestid('DottedRest')}
              />
            )}
          </g>
        )}
      </svg>
    </div>
  );
};

export default SongNote;
