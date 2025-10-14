import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-type-displayer',
  imports: [CommonModule],
  templateUrl: './type-displayer.html',
  styleUrl: './type-displayer.scss'
})
export class TypeDisplayer {
  types = input([''], { alias: 'types'})

  typeSvgUrl = computed(() => this.types())
}
