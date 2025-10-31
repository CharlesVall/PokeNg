import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { AbilitiesService } from '@core/services/abilities-service/abilities-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ability-description',
  imports: [CommonModule],
  templateUrl: './ability-description.html',
  styleUrl: './ability-description.scss'
})
export class AbilityDescription {
  private readonly abilitiesService = inject(AbilitiesService)
  public readonly abilityName = input.required<string>()

  protected readonly abilityDescription$ = toObservable(this.abilityName).pipe(
    switchMap(name =>
      this.abilitiesService.getAbilityDescriptionByName(this.abilityName().toLowerCase())
    )
  )
}
