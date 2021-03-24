import React from 'react';
import AddIcon from './AddIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AddIcon', () => {
  it('should render', () => {
    render(<AddIcon />);
    expect(screen.getByTestId('AddIcon')).toBeInTheDocument();
  });

  it('should render with optional color prop', () => {
    render(<AddIcon color="#bada55" />);
    expect(screen.getByTestId('AddIcon')).toBeInTheDocument();
  });
});
