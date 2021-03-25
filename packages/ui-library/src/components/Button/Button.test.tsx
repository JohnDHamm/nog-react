import React from 'react';
import Button from './Button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  const mockOnClick = jest.fn();

  it('should render with children as button text', () => {
    render(<Button onClick={jest.fn()}>submit</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('submit')).toBeInTheDocument();
  });

  it('should call the "onClick" prop when button is clicked', () => {
    render(<Button onClick={mockOnClick}>submit</Button>);
    userEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
