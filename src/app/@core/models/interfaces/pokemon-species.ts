import { Color, EggGroup, EvolutionChainUrl, FlavorTextEntry, Genera, Generation, GrowthRate, Habitat, Language2, Language3, Name, PalParkEncounter, PokedexNumber, Pokemon, Shape, Variety } from "./pokemon-misc"

export interface PokemonSpecies {
  base_happiness: number
  capture_rate: number
  color: Color
  egg_groups: EggGroup[]
  evolution_chain: EvolutionChainUrl
  evolves_from_species: any
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: Genera[]
  generation: Generation
  growth_rate: GrowthRate
  habitat: Habitat
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: Name[]
  order: number
  pal_park_encounters: PalParkEncounter[]
  pokedex_numbers: PokedexNumber[]
  shape: Shape
  varieties: Variety[]
}