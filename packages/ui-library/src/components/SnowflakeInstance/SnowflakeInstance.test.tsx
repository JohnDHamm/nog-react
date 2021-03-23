import React from 'react';
import SnowflakeInstance, {
  SnowflakeInstanceInterface,
} from './SnowflakeInstance';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { subTestIdInit } from 'function-library';

describe('SnowflakeInstance', () => {
  const testid = 'SnowflakeInstance';
  const subTestid = subTestIdInit(testid);

  const handleLightClick = jest.fn();
  const testProps: SnowflakeInstanceInterface = {
    lightsColors: [
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
      '#ff0000',
      '#000000',
    ],
    instanceNum: 42,
    instanceSize: 400,
    instanceType: 'current',
    onLightClick: handleLightClick,
  };

  it('should render a "current" type snowflake with current instance number and lights', () => {
    render(<SnowflakeInstance {...testProps} />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(screen.getByTestId('Snowflake')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('CurrentNumber'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('CurrentNumber'))).toHaveTextContent(
      (testProps.instanceNum + 1).toString()
    );
    expect(screen.getByTestId(subTestid('Light-0'))).toBeInTheDocument();
  });

  it('should render a "playback" type snowflake with lights, but no current instance number', () => {
    render(<SnowflakeInstance {...testProps} instanceType="playback" />);
    expect(screen.getByTestId(subTestid('Light-0'))).toBeInTheDocument();
    expect(
      screen.queryByTestId(subTestid('CurrentNumber'))
    ).not.toBeInTheDocument();
  });

  it('should render a "other" type snowflake with lights, but no current instance number', () => {
    render(<SnowflakeInstance {...testProps} instanceType="other" />);
    expect(screen.getByTestId(subTestid('Light-0'))).toBeInTheDocument();
    expect(
      screen.queryByTestId(subTestid('CurrentNumber'))
    ).not.toBeInTheDocument();
  });

  it('should call the "onLightClick" property of a "current" type snowflake with the light number when a light button is clicked', () => {
    render(<SnowflakeInstance {...testProps} />);
    userEvent.click(screen.getByTestId(subTestid('Light-4')));
    expect(handleLightClick).toHaveBeenCalledTimes(1);
    expect(handleLightClick).toHaveBeenCalledWith(4);
  });

  it('should not call the "onLightClick" property of a "playback" type snowflake when a light button is clicked', () => {
    jest.clearAllMocks();
    render(<SnowflakeInstance {...testProps} instanceType="playback" />);
    userEvent.click(screen.getByTestId(subTestid('Light-6')));
    expect(handleLightClick).toHaveBeenCalledTimes(0);
  });

  it('should not call the "onLightClick" property of a "other" type snowflake when a light button is clicked', () => {
    jest.clearAllMocks();
    render(<SnowflakeInstance {...testProps} instanceType="other" />);
    userEvent.click(screen.getByTestId(subTestid('Light-15')));
    expect(handleLightClick).toHaveBeenCalledTimes(0);
  });
});
