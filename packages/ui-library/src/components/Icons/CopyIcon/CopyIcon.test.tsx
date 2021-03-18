import React from 'react';
import CopyIcon from './CopyIcon';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CopyIcon', () => {
  it('should render', () => {
    render(<CopyIcon />);
    expect(screen.getByTestId('CopyIcon')).toBeInTheDocument();
  });
});
