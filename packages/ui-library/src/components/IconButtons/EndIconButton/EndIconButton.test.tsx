import React from 'react';
import EndIconButton from './EndIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('EndIconButton', () => {
  const onButtonClick = jest.fn();

  it('should render', () => {
    render(<EndIconButton width={40} onClick={jest.fn()} />);
    expect(screen.getByTestId('EndIconButton')).toBeInTheDocument();
  });

  it("should call it's onClick prop when button is clicked", () => {
    render(<EndIconButton width={40} onClick={onButtonClick} />);
    userEvent.click(screen.getByTestId('EndIconButton'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
