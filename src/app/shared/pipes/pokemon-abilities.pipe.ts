import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from 'app/models/PokemonAbility';

@Pipe({
  name: 'displayAbilities',
  standalone: true
})
export class DisplayAbilitiesPipe implements PipeTransform {
  transform(abilitiesObject: Ability[], returnArray: boolean = false): string | string[] {
  if (!abilitiesObject || !Array.isArray(abilitiesObject)) return "";
  
  const abilityList = abilitiesObject.map(ability => {
    const name = ability.ability.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  });

  if (returnArray) return abilityList.join(", ");
  
  return abilityList
  }
}