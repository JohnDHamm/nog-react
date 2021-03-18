import React from 'react';
import NextIconButton from './NextIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('NextIconButton', () => {
  const onButtonClick = jest.fn();

  it('should render', () => {
    render(<NextIconButton width={40} onClick={jest.fn()} />);
    expect(screen.getByTestId('NextIconButton')).toBeInTheDocument();
  });

  it("should call it's onClick prop when button is clicked", () => {
    render(<NextIconButton width={40} onClick={onButtonClick} />);
    userEvent.click(screen.getByTestId('NextIconButton'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
