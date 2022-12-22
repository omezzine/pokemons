import { render, screen, fireEvent } from '@testing-library/react';

import { Pagination } from '.';

describe('Pagination Component', () => {
  it('display Pagination', async () => {
    const onPaginationCHange = jest.fn();
    const { container } = render(
      <Pagination
        offset={10}
        count={20}
        limit={5}
        onChange={onPaginationCHange}
      />,
    );

    screen.debug();

    fireEvent.click(container.querySelector('a[rel="next"]'), {});

    expect(onPaginationCHange).toHaveBeenCalledWith(5);

    fireEvent.click(container.querySelector('a[rel="next"]'), {});

    expect(onPaginationCHange).toHaveBeenCalledWith(10);

    fireEvent.click(container.querySelector('a[rel="prev"]'), {});

    expect(onPaginationCHange).toHaveBeenCalledWith(5);
  });
});
