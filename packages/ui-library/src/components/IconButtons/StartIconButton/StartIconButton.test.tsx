import React from 'react';
import StartIconButton from './StartIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('StartIconButton', () => {
  const onButtonClick = jest.fn();

  it('should render', () => {
    render(<StartIconButton width={40} onClick={jest.fn()} />);
    expect(screen.getByTestId('StartIconButton')).toBeInTheDocument();
  });

  it("should call it's onClick prop when button is clicked", () => {
    render(<StartIconButton width={40} onClick={onButtonClick} />);
    userEvent.click(screen.getByTestId('StartIconButton'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
