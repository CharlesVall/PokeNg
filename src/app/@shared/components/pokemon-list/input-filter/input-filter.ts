import { Component, input } from '@angular/core';

@Component({
  selector: 'input-filter',
  imports: [],
  templateUrl: './input-filter.html',
  styleUrl: './input-filter.scss'
})
export class InputFilter {
  public placeholder = input<string>('', {alias: 'placeholder'})
  public filterValue = input('', {alias: 'filterValue'})
}
