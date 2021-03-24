import React from 'react';
import StopIconButton from './StopIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('StopIconButton', () => {
  const testid = 'StopIconButton';
  const mockOnClick = jest.fn();

  it('should render', () => {
    render(<StopIconButton width={40} />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should render with optional props', () => {
    render(
      <StopIconButton
        width={40}
        color="#bada55"
        hoverColor="white"
        onClick={mockOnClick}
      >
        <p>children</p>
      </StopIconButton>
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should call the optional "onClick" prop when clicked', () => {
    render(<StopIconButton width={40} onClick={mockOnClick} />);
    userEvent.click(screen.getByTestId(testid));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
