import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './input-filter.html',
  styleUrl: './input-filter.scss'
})
export class InputFilter {
  public placeholder = input<string>('', {alias: 'placeholder'})
  public filterValue = input('', {alias: 'filterValue'})
  public formControl = input.required<FormControl<string>>({alias: 'formControl'})
}
