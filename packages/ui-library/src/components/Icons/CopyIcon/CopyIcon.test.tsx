import React from 'react';
import CopyIcon from './CopyIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CopyIcon', () => {
  it('should render', () => {
    render(<CopyIcon />);
    expect(screen.getByTestId('CopyIcon')).toBeInTheDocument();
  });

  it('should render with optional color prop', () => {
    render(<CopyIcon color="#bada55" />);
    expect(screen.getByTestId('CopyIcon')).toBeInTheDocument();
  });
});
