import React from 'react';
import { render, screen } from '@testing-library/react';

import { App } from '../App';

test('Sample test case', () => {
  render(<App />);
  expect(screen.getByText('Hello world!')).toBeTruthy();
});
