import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Sidebar],
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