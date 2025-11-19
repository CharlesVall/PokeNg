import { Component, computed, inject, Signal } from '@angular/core';
import { LanguageService } from '@core/services/language-service/language-service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-sidebar-bottom',
  imports: [DividerModule],
  templateUrl: './sidebar-bottom.html',
  styleUrl: './sidebar-bottom.scss'
})
export class SidebarBottom {
  private readonly language = inject(LanguageService)

  protected switchLanguageToEnglish(): void {
    this.language.switchAppLanguage('en')
  }

  protected switchLanguageToFrench(): void {
    this.language.switchAppLanguage('fr')
  }

  protected isLanguageActive(language: string): Signal<boolean> {
    return computed(() => {
      const bool = (language == this.language.getAppLanguage()())
      return bool
    })
  }
}
