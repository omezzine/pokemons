import { render, screen } from '@testing-library/react';

import { PokemonCard } from '.';

describe('Pokemon Card Component', () => {
  it('display PokemonCard', async () => {
    const { container } = render(
      <PokemonCard pokemon={{ name: 'pikachu', id: '1', image: '1.png' }} />,
    );

    screen.debug();

    const spanTitle = container.querySelector('span');
    const img = container.querySelector('img');

    expect(spanTitle.innerHTML).toContain('pikachu');
    expect(img.getAttribute('src')).toEqual('1.png');
  });
});
