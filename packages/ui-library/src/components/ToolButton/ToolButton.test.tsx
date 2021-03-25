import React from 'react';
import ToolButton from './ToolButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddIcon from '../Icons/AddIcon/AddIcon';
import { subTestIdInit } from 'function-library';
import userEvent from '@testing-library/user-event';

describe('ToolButton', () => {
  const testid = 'ToolButton';
  const subTestid = subTestIdInit(testid);
  const testLabel = 'Some label';
  const mockOnClick = jest.fn();

  it('should render a button with icon and label', () => {
    render(
      <ToolButton icon={<AddIcon />} label={testLabel} onClick={mockOnClick} />
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Icon'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Label'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('Label'))).toHaveTextContent(testLabel);
  });

  it('should call the "onClick" prop when button is clicked', () => {
    render(
      <ToolButton icon={<AddIcon />} label={testLabel} onClick={mockOnClick} />
    );
    userEvent.click(screen.getByTestId(testid));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not call the "onClick" prop when a "disabled" button is clicked', () => {
    jest.clearAllMocks();

    render(
      <ToolButton
        disabled={true}
        icon={<AddIcon />}
        label={testLabel}
        onClick={mockOnClick}
      />
    );
    userEvent.click(screen.getByTestId(testid));
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
