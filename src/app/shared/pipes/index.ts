export * from './pokemon-abilities.pipe';
export * from './pokemon-types.pipe';

import { DisplayAbilitiesPipe } from './pokemon-abilities.pipe';
import { DisplayTypesPipe } from './pokemon-types.pipe';

export const PokemonPipes = [
  DisplayAbilitiesPipe,
  DisplayTypesPipe,
];