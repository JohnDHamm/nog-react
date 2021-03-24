import React from 'react';
import BaseIconButton, { BaseIconProps } from './BaseIconButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('BaseIconButton', () => {
  const baseProps: BaseIconProps = {
    viewbox: '',
    width: 120,
    children: <p>something</p>,
  };

  const mockOnClick = jest.fn();

  it('should render', () => {
    render(
      <BaseIconButton {...baseProps}>{baseProps.children}</BaseIconButton>
    );
    expect(screen.getByTestId('BaseIconButton')).toBeInTheDocument();
  });

  it('should render with optional props', () => {
    render(
      <BaseIconButton
        {...baseProps}
        color="#bada55"
        hoverColor="white"
        onClick={mockOnClick}
        testid="Test ID"
      >
        {baseProps.children}
      </BaseIconButton>
    );
    expect(screen.getByTestId('Test ID')).toBeInTheDocument();
  });

  it('should call the optional "onClick" prop when clicked', () => {
    render(
      <BaseIconButton {...baseProps} onClick={mockOnClick}>
        {baseProps.children}
      </BaseIconButton>
    );
    userEvent.click(screen.getByTestId('BaseIconButton'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
