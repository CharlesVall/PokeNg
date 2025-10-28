import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { MenuBar } from './menu-bar/menu-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  public constructor(private primeng: PrimeNG) {}
  
  public toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('app-dark');
  }

  public ngOnInit() {
    this.primeng.ripple.set(true);

    this.toggleDarkMode()
  }
}