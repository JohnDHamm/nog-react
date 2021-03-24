import React from 'react';
import PlayIconButton from './PlayIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('PlayIconButton', () => {
  const testid = 'PlayIconButton';
  const mockOnClick = jest.fn();

  it('should render', () => {
    render(<PlayIconButton width={40} />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should render with optional props', () => {
    render(
      <PlayIconButton
        width={40}
        color="#bada55"
        hoverColor="white"
        onClick={mockOnClick}
      >
        <p>children</p>
      </PlayIconButton>
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });

  it('should call the optional "onClick" prop when clicked', () => {
    render(<PlayIconButton width={40} onClick={mockOnClick} />);
    userEvent.click(screen.getByTestId(testid));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
