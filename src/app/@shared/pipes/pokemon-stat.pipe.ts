import { Pipe, PipeTransform } from '@angular/core';
import { Stat } from '@core/models/';

@Pipe({
  name: 'displayStat'
})
export class DisplayStatPipe implements PipeTransform {
  public transform(statsObject: Stat[], statToDisplayName: string): string{
    if (!statsObject || !Array.isArray(statsObject)) return '';

    const statToDisplay = statsObject.filter(stat => stat.stat.name === statToDisplayName);
    const valueToReturn = statToDisplay[0].base_stat

    return valueToReturn.toString();
  }
}