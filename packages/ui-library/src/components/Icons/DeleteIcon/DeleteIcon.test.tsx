import React from 'react';
import DeleteIcon from './DeleteIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('DeleteIcon', () => {
  it('should render', () => {
    render(<DeleteIcon />);
    expect(screen.getByTestId('DeleteIcon')).toBeInTheDocument();
  });
});
