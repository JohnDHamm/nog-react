import React from 'react';
import { MobileMessage } from './MobileMessage';
import { render, screen } from '@testing-library/react';

describe('MobileMessage', () => {
  it('should render', () => {
    render(<MobileMessage />);
    expect(screen.getByTestId('MobileMessage')).toBeInTheDocument();
  });
});
