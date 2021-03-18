import React from 'react';
import PlayIconButton from './PlayIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('PlayIconButton', () => {
  const onButtonClick = jest.fn();

  it('should render', () => {
    render(<PlayIconButton width={40} onClick={jest.fn()} />);
    expect(screen.getByTestId('PlayIconButton')).toBeInTheDocument();
  });

  it("should call it's onClick prop when button is clicked", () => {
    render(<PlayIconButton width={40} onClick={onButtonClick} />);
    userEvent.click(screen.getByTestId('PlayIconButton'));
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
