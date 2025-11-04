import { FlavorTextEntry, Generation, Language, Name, Pokemon } from "./pokemon-misc"

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