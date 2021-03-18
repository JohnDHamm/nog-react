import React from 'react';
import PreviousIconButton from './PreviousIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('PreviousIconButton', () => {
  const onButtonClick = jest.fn();

  it('should render', () => {
    render(<PreviousIconButton width={40} onClick={jest.fn()} />);
    expect(screen.getByTestId('PreviousIconButton')).toBeInTheDocument();
  });

  it("should call it's onClick prop when button is clicked", () => {
    render(<PreviousIconButton width={40} onClick={onButtonClick} />);
    userEvent.click(screen.getByTestId('PreviousIconButton'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
