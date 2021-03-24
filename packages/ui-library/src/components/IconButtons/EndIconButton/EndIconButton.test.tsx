import React from 'react';
import EndIconButton from './EndIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('EndIconButton', () => {
  const testid = 'EndIconButton';
  const mockOnClick = jest.fn();

  it('should render', () => {
    render(<EndIconButton width={40} />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should render with optional props', () => {
    render(
      <EndIconButton
        width={40}
        color="#bada55"
        hoverColor="white"
        onClick={mockOnClick}
      >
        <p>children</p>
      </EndIconButton>
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should call the optional "onClick" prop when clicked', () => {
    render(<EndIconButton width={40} onClick={mockOnClick} />);
    userEvent.click(screen.getByTestId(testid));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
