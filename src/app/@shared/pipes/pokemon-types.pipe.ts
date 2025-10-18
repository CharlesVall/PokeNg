import { Pipe, PipeTransform } from '@angular/core';
import { PokemonType } from '@core/models/'

@Pipe({
  name: 'displayTypes'
})
export class DisplayTypesPipe implements PipeTransform {
  public transform(typesObject: PokemonType[]): string[] {
    if (!typesObject || !Array.isArray(typesObject)) return [];

    const typeList = typesObject.map(type => type.type.name);
    return typeList;
  }
}