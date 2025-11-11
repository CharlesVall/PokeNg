import { Stat } from './interfaces/pokemon-misc';
import { PokemonDetails } from './pokemon-details';
import { PokemonId } from './pokemon-id'

export class PokemonComparable {
  id: PokemonId;
  name: string;
  stats: Stat[];
  hp: number;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  speed: number;

  private getStatValueByName(statsObject: Stat[], statToGetName: string): number{
    if (!statsObject || !Array.isArray(statsObject)) {
      return 0;
    }

    const statToDisplay = statsObject.filter(stat => stat.stat.name === statToGetName);
    const valueToReturn = statToDisplay[0].base_stat

    return valueToReturn;
  }
  public constructor(pokemonDetails: PokemonDetails) {
    this.id = pokemonDetails.id;
    this.name = pokemonDetails.name;
    this.stats = pokemonDetails.stats
    this.hp = this.getStatValueByName(pokemonDetails.stats, 'hp')
    this.attack = this.getStatValueByName(pokemonDetails.stats, 'attack')
    this.specialAttack = this.getStatValueByName(pokemonDetails.stats, 'special-attack')
    this.defense = this.getStatValueByName(pokemonDetails.stats, 'defense')
    this.specialDefense = this.getStatValueByName(pokemonDetails.stats, 'special-defense')
    this.speed = this.getStatValueByName(pokemonDetails.stats, 'speed')
  }

  public static fromDetails(baseDetails: PokemonDetails): PokemonComparable {
    return new PokemonComparable(baseDetails);
  }
  
  public getStatsValue() {
    return [this.hp, this.specialAttack, this.specialDefense, this.attack, this.defense, this.speed]
  }
}