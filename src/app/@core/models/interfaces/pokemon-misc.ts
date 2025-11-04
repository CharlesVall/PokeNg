export interface Pokemon {
  name: string
  url: string
}



export interface Pokemon {
  is_hidden: boolean
  pokemon: Pokemon2
  slot: number
}

export interface Pokemon2 {
  name: string
  url: string
}


export interface Generation {
  name: string
  url: string
}

export interface VersionGroup {
  name: string
  url: string
}


export interface GameIndex {
  game_index: number
  version: Version
}

export interface Version {
  name: string
  url: string
}

export interface Language {
  name: string
  url: string
}

export interface Language2 {
  name: string
  url: string
}

export interface Name {
  language: Language3
  name: string
}

export interface Language3 {
  name: string
  url: string
}

export interface Species {
  name: string
  url: string
}

export interface Species2 {
  name: string
  url: string
}

export interface Species3 {
  name: string
  url: string
}



export interface Cries {
  latest: string
  legacy: string
}

export interface Form {
  name: string
  url: string
}

export interface Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export interface Move {
  name: string
  url: string
}

export interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  order?: number
  version_group: VersionGroup
}

export interface MoveLearnMethod {
  name: string
  url: string
}

export interface PastAbility {
  abilities: Ability3[]
  generation: Generation
}

export interface Ability3 {
  ability: any
  is_hidden: boolean
  slot: number
}

export interface Species {
  name: string
  url: string
}

export interface Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}

export interface Showdown {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}



export interface Icons2 {
  front_default: string
  front_female: any
}



export interface Color {
  name: string
  url: string
}

export interface EggGroup {
  name: string
  url: string
}

export interface EvolutionChainUrl {
  url: string
}

export interface Language {
  name: string
  url: string
}

export interface Genera {
  genus: string
  language: Language2
}

export interface Generation {
  name: string
  url: string
}

export interface GrowthRate {
  name: string
  url: string
}

export interface Habitat {
  name: string
  url: string
}

export interface Name {
  language: Language3
  name: string
}

export interface PalParkEncounter {
  area: Area
  base_score: number
  rate: number
}

export interface Area {
  name: string
  url: string
}

export interface PokedexNumber {
  entry_number: number
  pokedex: Pokedex
}

export interface Pokedex {
  name: string
  url: string
}

export interface Shape {
  name: string
  url: string
}

export interface Variety {
  is_default: boolean
  pokemon: Pokemon
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
  other?: any;
}

export interface Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export interface Stat2 {
  name: string
  url: string
}

export interface Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export interface Ability2 {
  name: string
  url: string
}

export interface PokemonType {
  slot: number
  type: PokemonType2
}

export interface PokemonType2 {
  name: string
  url: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: Language2
  version_group: VersionGroup
}
