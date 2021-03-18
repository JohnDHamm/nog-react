import React from 'react';
import StopIconButton from './StopIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('StopIconButton', () => {
  const onButtonClick = jest.fn();

  it('should render', () => {
    render(<StopIconButton width={40} onClick={jest.fn()} />);
    expect(screen.getByTestId('StopIconButton')).toBeInTheDocument();
  });

  it("should call it's onClick prop when button is clicked", () => {
    render(<StopIconButton width={40} onClick={onButtonClick} />);
    userEvent.click(screen.getByTestId('StopIconButton'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
