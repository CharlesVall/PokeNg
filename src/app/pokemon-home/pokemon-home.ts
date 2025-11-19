import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '@core/services/language-service/language-service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-pokemon-home',
  imports: [CommonModule, DividerModule],
  templateUrl: './pokemon-home.html',
  styleUrl: './pokemon-home.scss'
})
export class PokemonHome {
  private readonly languageService = inject(LanguageService)

  protected switchAppLanguage(newLanguage: string): void {
    this.languageService.switchAppLanguage(newLanguage)
  }
}
