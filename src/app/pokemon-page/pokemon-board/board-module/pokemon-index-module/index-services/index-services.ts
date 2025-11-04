import { inject, Injectable } from '@angular/core';
import { PokemonDetails } from '@core/models';
import { VersionService } from '@core/services/version-service/version-service';

@Injectable()
export class IndexServices {
  private readonly versionService = inject(VersionService)
  
  public getGameGenerationList(pokemon: PokemonDetails): number[] {
    const generations = pokemon.gameIndices
      .map(gameIndex => this.versionService.getGenerationNumberOfVersion(gameIndex.version.name))
    console.log(generations)
    return generations
  }
}
