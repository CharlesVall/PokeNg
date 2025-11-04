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
    ),
    this.nameControl.valueChanges.pipe(
      startWith(''),
    ),
    this.abilitiesControl.valueChanges.pipe(
      startWith(''),
    ),
    this.typesControl.valueChanges.pipe(
      startWith([]),
    )
  ]).pipe(
    debounceTime(300),
    map(([id, name, abilities, types]) => ({ id, name, abilities, types }))
  );
}
