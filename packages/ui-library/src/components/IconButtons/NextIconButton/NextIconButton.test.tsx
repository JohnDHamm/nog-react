import React from 'react';
import NextIconButton from './NextIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('NextIconButton', () => {
  const testid = 'NextIconButton';
  const mockOnClick = jest.fn();

  it('should render', () => {
    render(<NextIconButton width={40} />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should render with optional props', () => {
    render(
      <NextIconButton
        width={40}
        color="#bada55"
        hoverColor="white"
        onClick={mockOnClick}
      >
        <p>children</p>
      </NextIconButton>
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should call the optional "onClick" prop when clicked', () => {
    render(<NextIconButton width={40} onClick={mockOnClick} />);
    userEvent.click(screen.getByTestId(testid));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
