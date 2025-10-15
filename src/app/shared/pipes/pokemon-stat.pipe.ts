import { Pipe, PipeTransform } from '@angular/core';
import { Stat } from 'app/models/PokemonStat';

@Pipe({
  name: 'displayStat',
  standalone: true
})
export class DisplayStatPipe implements PipeTransform {
  transform(statsObject: Stat[], statToDisplayName: string): string{
    if (!statsObject || !Array.isArray(statsObject)) return '';

    const statToDisplay = statsObject.filter(stat => stat.stat.name === statToDisplayName);
    const valueToReturn = statToDisplay[0].base_stat

    return valueToReturn.toString();
  }
}