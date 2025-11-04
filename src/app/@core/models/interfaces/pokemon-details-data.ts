import { Ability, Cries, GameIndex, Mfe, PastAbility, PokemonType, Species, Sprites, Stat } from './pokemon-misc'
import { Form } from '@angular/forms'

export interface PokemonDetailsData {
  abilities: Ability[]
  base_experience: number
  cries: Cries
  forms: Form[]
  game_indices: GameIndex[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_abilities: PastAbility[]
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: PokemonType[]
  weight: number
}