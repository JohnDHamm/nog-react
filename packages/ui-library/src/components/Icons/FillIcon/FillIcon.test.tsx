import React from 'react';
import FillIcon from './FillIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FillIcon', () => {
  it('should render', () => {
    render(<FillIcon />);
    expect(screen.getByTestId('FillIcon')).toBeInTheDocument();
  });
});
