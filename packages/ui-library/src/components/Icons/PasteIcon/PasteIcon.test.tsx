import React from 'react';
import PasteIcon from './PasteIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PasteIcon', () => {
  it('should render', () => {
    render(<PasteIcon />);
    expect(screen.getByTestId('PasteIcon')).toBeInTheDocument();
  });

  it('should render with optional color prop', () => {
    render(<PasteIcon color="#bada55" />);
    expect(screen.getByTestId('PasteIcon')).toBeInTheDocument();
  });
});
