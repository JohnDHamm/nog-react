import React from 'react';
import TestComponent from './TestComponent';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TestComponent', () => {
  it('should render without crashing', () => {
    render(<TestComponent text="here is the text!" />);
    expect(screen.getByTestId('TestComponent')).toBeInTheDocument();
  });

  it('should render the supplied text prop', () => {
    render(<TestComponent text="here is the text!" />);
    expect(screen.getByText('here is the text!')).toBeInTheDocument();
  });
});
