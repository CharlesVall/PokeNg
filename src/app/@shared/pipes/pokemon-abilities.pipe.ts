import { Pipe, PipeTransform } from '@angular/core';
import { Ability } from '@core/models/';

@Pipe({
  name: 'displayAbilities'
})
export class DisplayAbilitiesPipe implements PipeTransform {
  public transform(abilitiesObject: Ability[], returnArray: boolean = false): string | string[] {
    if (!abilitiesObject || !Array.isArray(abilitiesObject)) {
      return '';
    }

    const abilityList = abilitiesObject.map(ability => {
      const name = ability.ability.name;
      return name.charAt(0).toUpperCase() + name.slice(1);
    });

    return returnArray ? abilityList.join(', ') : abilityList;
  }
}