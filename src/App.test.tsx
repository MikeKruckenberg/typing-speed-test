import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders typing test instructions', () => {
  render(<App />);
  const linkElement = screen.getByText(/Try your hand at typing/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders typing test input', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/start typing to begin/i);
  expect(linkElement).toBeInTheDocument();
});
