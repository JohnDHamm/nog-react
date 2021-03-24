import React from 'react';
import NogLogo from './NogLogo';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NogLogo', () => {
  it('should render by default with background', () => {
    render(<NogLogo />);
    expect(screen.getByTestId('NogLogo')).toBeInTheDocument();
    expect(screen.getByTestId('NogLogo-background')).toBeInTheDocument();
  });

  it('should not render background if specified', () => {
    render(<NogLogo hasBackground={false} />);
    expect(screen.queryByTestId('NogLogo-background')).not.toBeInTheDocument();
  });

  it('should render with optional color props', () => {
    render(
      <NogLogo
        backgroundColor="green"
        borderColor="red"
        lettersColor="#bada55"
      />
    );
    expect(screen.getByTestId('NogLogo')).toBeInTheDocument();
    expect(screen.getByTestId('NogLogo-background')).toBeInTheDocument();
  });
});
