import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { MenuBar } from './menu-bar/menu-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly primeNg = inject(PrimeNG)
  private readonly translate = inject(TranslateService)
  
  public toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('app-dark');
  }

  public ngOnInit() {
    this.primeNg.ripple.set(true);
    
    this.toggleDarkMode()
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    this.translate.use('fr')
  }
}