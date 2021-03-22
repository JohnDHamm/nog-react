import React from 'react';
import NavBar from './NavBar';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { subTestIdInit } from 'function-library';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from "react-router";

describe('NavBar', () => {
  const testid = 'NavBar';
  const subTestid = subTestIdInit(testid);

  it('should render the home icon, user name and user icon', () => {
    render(<NavBar userName="Test User" avatarSrc="" />);
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('HomeIcon'))).toBeInTheDocument();
    // expect(getByTestId(subTestid('HomeIcon'))).toHaveAttribute("href", "/");
    expect(screen.getByTestId(subTestid('UserName'))).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('UserName'))).toHaveTextContent(
      'Test User'
    );
    expect(screen.getByTestId(subTestid('UserIcon'))).toBeInTheDocument();
  });

  it('should navigate to "/" route when the home icon is clicked', () => {
    // render(
    //   <MemoryRouter route=>
    //     <NavBar userName="Test User" avatarSrc="" />
    //   </MemoryRouter>
    //     );
    // userEvent.click(screen.getByTestId(subTestid('HomeIcon')));
  });
});
