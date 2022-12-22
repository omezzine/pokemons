import { render, screen } from '@testing-library/react';

import { Spinner } from '.';

test('displays spinner', async () => {
  // ARRANGE
  render(<Spinner />);

  // ACT
  await screen.findByRole('alert');

  // ASSERT
  expect(screen.getByRole('alert')).toBeDefined();
});
