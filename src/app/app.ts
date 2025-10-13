import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  constructor(private primeng: PrimeNG) {}
  
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('app-dark');
  }

  ngOnInit() {
    this.primeng.ripple.set(true);

    const element = document.querySelector('html');
    element?.classList.toggle('app-dark');
  }
}