import React from 'react';
import Snowflake from './Snowflake';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Snowflake', () => {
  it('should render by default with background', () => {
    render(
      <Snowflake
        innerColor="white"
        innerBorderColor="red"
        outerBorderColor="green"
      />
    );
    expect(screen.getByTestId('Snowflake')).toBeInTheDocument();
  });
});
