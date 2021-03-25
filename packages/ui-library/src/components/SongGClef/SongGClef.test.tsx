import React from 'react';
import SongGClef from './SongGClef';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SongGClef', () => {
  it('should render', () => {
    render(<SongGClef />);
    expect(screen.getByTestId('SongGClef')).toBeInTheDocument();
  });

  it('should accept an optional "color" prop', () => {
    render(<SongGClef color="#bada55" />);
    expect(screen.getByTestId('SongGClef')).toBeInTheDocument();
  });
});
