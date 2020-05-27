import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders start button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/start demo/i);
  expect(linkElement).toBeInTheDocument();
});
