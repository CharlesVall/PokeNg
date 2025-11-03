import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-page-header',
  imports: [CommonModule],
  templateUrl: './feature-page-header.html',
  styleUrl: './feature-page-header.scss'
})
export class FeaturePageHeader {
  public readonly pageTitle = input.required<string>()
}
