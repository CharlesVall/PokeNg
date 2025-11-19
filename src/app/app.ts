import { Component, computed, effect, DOCUMENT, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { MenuBar } from './menu-bar/menu-bar';
import { TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly primeNg = inject(PrimeNG);
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  private readonly currentLanguage = toSignal(
    this.translate.onLangChange.pipe(map(event => event.lang)),
    { initialValue: this.translate.currentLang || 'en' }
  );

  public toggleDarkMode() {
    const element = this.document.querySelector('html');
    element?.classList.toggle('app-dark');
  }

  public ngOnInit() {
    this.primeNg.ripple.set(true);

    this.toggleDarkMode();
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    effect(() => {
      this.document.documentElement.lang = this.currentLanguage();
    });
  }
}
