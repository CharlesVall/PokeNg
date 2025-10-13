export interface PokemonRow {
  id: number;
  name: string;
  abilities: Ability[];
  types: Type[];
  sprites: Sprites;
}

// Vous pouvez garder ces interfaces telles quelles de l'API
export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  front_female?: string;
  front_shiny_female?: string;
  back_default: string;
  back_shiny: string;
  back_female?: string;
  back_shiny_female?: string;
  other?: any; // Si vous voulez garder les autres sprites
}