import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Tree component', () => {
  render(<App />);
  const tree = screen.getByTestId('tree');
  expect(tree).toBeInTheDocument();
});