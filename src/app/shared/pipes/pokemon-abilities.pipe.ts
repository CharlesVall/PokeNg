import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from 'app/models/PokemonAbilities';

@Pipe({
  name: 'displayAbilities',
  standalone: true
})
export class DisplayAbilitiesPipe implements PipeTransform {
  transform(AbilitiesObject: Ability[]): string {
    if (!AbilitiesObject || !Array.isArray(AbilitiesObject)) {
      return "";
    }
    const abilityList = AbilitiesObject.map(ability => ability.ability.name);
    return abilityList.join(", ");
  }
}