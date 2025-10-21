import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common'
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar-buttons',
  imports: [ButtonModule, RouterLink],
  templateUrl: './sidebar-buttons.html',
  styleUrl: './sidebar-buttons.scss'
})

export class SidebarButtons {
  private router = inject(Router);
  private location = inject(Location)

  protected goToPokemonHome(): void {  
    this.router.navigateByUrl('');
  }

  protected goToPokedex(): void {  
    this.router.navigateByUrl('pokedex');
  }

  protected goToPokemonSearchPage(): void {
    this.router.navigateByUrl('')
  }

  protected goToPrevious(): void {
    this.location.back()
  }
}
