import React from 'react';
import SongGClef from './SongGClef';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SongGClef', () => {
  it('should render by default with background', () => {
    render(<SongGClef />);
    expect(screen.getByTestId('SongGClef')).toBeInTheDocument();
  });
});
