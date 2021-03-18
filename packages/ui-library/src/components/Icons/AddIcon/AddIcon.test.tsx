import React from 'react';
import AddIcon from './AddIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AddIcon', () => {
  it('should render', () => {
    render(<AddIcon />);
    expect(screen.getByTestId('AddIcon')).toBeInTheDocument();
  });
});
