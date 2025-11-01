import { Generation, Language, Name } from "./pokemon-misc"
import { FlavorTextEntry } from "./pokemon-text-flavor"

export interface AbilityDetails {
  effect_changes: any[]
  effect_entries: EffectEntry[]
  flavor_text_entries: FlavorTextEntry[]
  generation: Generation
  id: number
  is_main_series: boolean
  name: string
  names: Name[]
  pokemon: Pokemon[]
}

export interface EffectEntry {
  effect: string
  language: Language
  short_effect: string
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
