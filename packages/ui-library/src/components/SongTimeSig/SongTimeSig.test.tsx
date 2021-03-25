import React from 'react';
import SongTimeSig from './SongTimeSig';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { subTestIdInit } from 'function-library';

describe('SongTimeSig', () => {
  const testid = 'SongTimeSig';
  const subTestid = subTestIdInit(testid);

  it('should render with the correct time signature numbers', () => {
    render(<SongTimeSig timeSignature="3:4" height={100} width={500} />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(screen.getByTestId('SongStaff')).toBeInTheDocument();
    expect(screen.getByTestId('SongGClef')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('TimeNumberTop'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('TimeNumberTop'))).toHaveTextContent(
      '3'
    );
    expect(
      screen.getByTestId(subTestid('TimeNumberBottom'))
    ).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('TimeNumberBottom'))).toHaveTextContent(
      '4'
    );
  });
});
