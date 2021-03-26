import React from 'react';
import NavBar from './NavBar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { subTestIdInit } from 'function-library';

describe('NavBar', () => {
  const testid = 'NavBar';
  const subTestid = subTestIdInit(testid);

  it('should render the home icon, user name and user icon', () => {
    render(<NavBar userName="Test User" avatarSrc="" />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('HomeLink'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('HomeLink'))).toHaveAttribute(
      'href',
      '/'
    );
    expect(screen.getByTestId('NogLogo')).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('UserName'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('UserName'))).toHaveTextContent(
      'Test User'
    );
    expect(screen.getByTestId(subTestid('UserIcon'))).toBeInTheDocument();
  });
});
