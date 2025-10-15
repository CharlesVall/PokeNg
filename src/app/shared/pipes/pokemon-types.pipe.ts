import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '../../models/PokemonType'

@Pipe({
  name: 'displayTypes',
  standalone: true
})
export class DisplayTypesPipe implements PipeTransform {
  transform(typesObject: PokemonType[]): string[] {
    if (!typesObject || !Array.isArray(typesObject)) return [];

    const typeList = typesObject.map(type => type.type.name);
    return typeList;
  }
}