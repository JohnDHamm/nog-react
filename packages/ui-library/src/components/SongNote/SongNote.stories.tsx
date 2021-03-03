import React from 'react';
import SongNote from './SongNote';
import { componentStoryPath } from '../../storybook';
import { ComponentStoryWrapper, PropsTableProps } from 'storybook-helpers';

const componentProps: Array<PropsTableProps> = [
  {
    propName: 'type',
    propType: '"note" | "rest"',
    description: 'note or rest',
    required: true,
  },
  {
    propName: 'length',
    propType:
      '"whole" | "half" | "quarter" | "eighth" | "sixteenth" + "-dotted"',
    description: 'length of note',
    required: true,
  },
  {
    propName: 'color',
    propType: 'string',
    description: 'color for notes',
    required: false,
  },
  {
    propName: 'ledgerLine',
    propType: 'undefined | "above" | "through" | "below"',
    description: 'adds ledger line to note',
    required: false,
  },
  {
    propName: 'noteKey',
    propType: '"flat" | "sharp" | "natural"',
    description: 'adds key to note',
    required: false,
  },
];
export default {
  title: componentStoryPath('SongNote'),
};

export const WholeNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    description="A musical note or rest"
    subName="whole note"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="whole" />
      </div>
    }
    componentProps={componentProps}
  />
);

export const HalfNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    description="A musical note or rest"
    subName="half note"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="half" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const QuarterNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    description="A musical note or rest"
    subName="quarter note"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const EighthNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    description="A musical note or rest"
    subName="eighth note"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="eighth" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const SixteenthNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="sixteenth note"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="sixteenth" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const DottedNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="dotted note"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter-dotted" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const FlatNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="flat note"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" noteKey="flat" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const SharpNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="sharp note"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" noteKey="sharp" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const NaturalNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="natural note"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" noteKey="natural" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const LedgerLineAboveNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="ledger line above"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" ledgerLine="above" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const LedgerLineThroughNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="ledger line through note"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" ledgerLine="through" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const LedgerLineBelowNote = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="ledger line below"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="note" length="quarter" ledgerLine="below" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const WholeRest = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="whole rest"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="rest" length="whole" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const HalfRest = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="half rest"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="rest" length="half" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const QuarterRest = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="quarter rest"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="rest" length="quarter" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const EighthRest = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="eighth rest"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="rest" length="eighth" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const SixteenthRest = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="sixteenth rest"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="rest" length="sixteenth" />
      </div>
    }
    componentProps={componentProps}
  />
);
export const DottedRest = () => (
  <ComponentStoryWrapper
    name="SongNote"
    subName="dotted rest"
    description="A musical note or rest"
    component={
      <div
        style={{ width: '100px', backgroundColor: 'black', padding: '1rem' }}
      >
        <SongNote type="rest" length="quarter-dotted" />
      </div>
    }
    componentProps={componentProps}
  />
);
