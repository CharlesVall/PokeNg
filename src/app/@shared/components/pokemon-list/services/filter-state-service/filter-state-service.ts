import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterCriteria } from '@core/models';
import { combineLatest, debounceTime, map, Observable, startWith } from 'rxjs';

@Injectable()
export class FilterStateService {
  public readonly idControl = new FormControl('', { nonNullable: true });
  public readonly nameControl = new FormControl('', { nonNullable: true });
  public readonly abilitiesControl = new FormControl('', { nonNullable: true });
  public readonly typesControl = new FormControl<string[]>([], { nonNullable: true });

  public readonly typesOptions = [
  'bug', 'dark', 'dragon', 'electric', 'fire', 'fairy', 'fighting',
  'flying', 'ghost', 'ground', 'ice', 'normal', 'poison',
  'psychic', 'rock', 'steel', 'water'
]

  public readonly filters$: Observable<FilterCriteria> = combineLatest([
    this.idControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300)
    ),
    this.nameControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300)
    ),
    this.abilitiesControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300)
    ),
    this.typesControl.valueChanges.pipe(
      startWith([]),
      debounceTime(300)
    )
  ]).pipe(
    map(([id, name, abilities, types]) => ({ id, name, abilities, types }))
  );
}
