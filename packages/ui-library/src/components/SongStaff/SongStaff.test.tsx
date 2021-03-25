import React from 'react';
import SongStaff from './SongStaff';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SongStaff', () => {
  it('should render', () => {
    render(<SongStaff height={50} width={350} />);
    expect(screen.getByTestId('SongStaff')).toBeInTheDocument();
  });

  it('should accept an optional "lineColor" prop', () => {
    render(<SongStaff height={50} width={350} lineColor="#bada55" />);
    expect(screen.getByTestId('SongStaff')).toBeInTheDocument();
  });
});
