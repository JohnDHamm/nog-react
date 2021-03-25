import React from 'react';
import FillIcon from './FillIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FillIcon', () => {
  it('should render', () => {
    render(<FillIcon />);
    expect(screen.getByTestId('FillIcon')).toBeInTheDocument();
  });

  it('should render with optional color prop', () => {
    render(<FillIcon color="#bada55" />);
    expect(screen.getByTestId('FillIcon')).toBeInTheDocument();
  });
});
