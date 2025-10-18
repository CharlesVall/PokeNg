export * from './pokemon-abilities.pipe';
export * from './pokemon-stat.pipe'
export * from './pokemon-types.pipe';

import { DisplayAbilitiesPipe } from './pokemon-abilities.pipe';
import { DisplayStatPipe } from './pokemon-stat.pipe';
import { DisplayTypesPipe } from './pokemon-types.pipe';

export const PokemonPipes = [
  DisplayAbilitiesPipe,
  DisplayStatPipe,
  DisplayTypesPipe,
];