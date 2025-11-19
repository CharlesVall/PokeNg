import { Component, computed, inject } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import { CompareDataService } from '../compare-data-service/compare-data-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface RadarIndicator {
  name: string;
  max: number;
}

@Component({
  selector: 'app-compare-stats-graph',
  imports: [NgxEchartsDirective, TranslateModule],
  templateUrl: './compare-stats-graph.html',
  styleUrls: ['./compare-stats-graph.scss']
})
export class CompareStatsGraph {
  private readonly compareDataService = inject(CompareDataService);
  private readonly translate = inject(TranslateService);

  private pokemonComparableList = toSignal(
    this.compareDataService.getSelectPokemonCompareList(),
    { initialValue: [] }
  );

  private translationsLoaded = toSignal(
    this.translate.onTranslationChange,
    { initialValue: null }
  );

  private comparableData = computed(() => {
    const pokemons = this.pokemonComparableList();

    return pokemons.map((pokemon, index) => ({
      value: pokemon.getStatsValue(),
      name: pokemon.name,
      areaStyle: {
        color: this.getColor(index, 0.3)
      },
      lineStyle: {
        color: this.getColor(index, 1),
        width: 2
      },
      itemStyle: {
        color: this.getColor(index, 1),
        borderWidth: 2
      }
    }));
  });

  private colors = [
    'rgba(255, 99, 132, INDEX)', // Red
    'rgba(54, 162, 235, INDEX)', // Blue
    'rgba(255, 206, 86, INDEX)', // Yellow
    'rgba(75, 192, 192, INDEX)', // Green
    'rgba(153, 102, 255, INDEX)', // Purple
    'rgba(255, 159, 64, INDEX)'  // Orange
  ];

  private getColor(index: number, opacity: number): string {
    const colorIndex = index % this.colors.length;
    return this.colors[colorIndex].replace('INDEX', opacity.toString());
  }

  private indicators = computed<RadarIndicator[]>(() => {
    const loaded = this.translationsLoaded();

    return [
      { name: this.translate.instant('pokemon-compare.hp'), max: 255 },
      { name: this.translate.instant('pokemon-compare.sp_attack'), max: 255 },
      { name: this.translate.instant('pokemon-compare.sp_defense'), max: 255 },
      { name: this.translate.instant('pokemon-compare.speed'), max: 255 },
      { name: this.translate.instant('pokemon-compare.defense'), max: 255 },
      { name: this.translate.instant('pokemon-compare.attack'), max: 255 }
    ];
  });

  chartOption = computed(() => ({
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const data = params.value;
        let result = `<strong>${params.name}</strong><br/>`;
        this.indicators().forEach((indicator, index) => {
          result += `${indicator.name}: ${data[index]}<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: this.comparableData().map(data => data.name),
      bottom: 20,
      itemGap: 20
    },
    radar: {
      shape: 'polygon',
      center: ['50%', '38%'],
      radius: '63%',
      indicator: this.indicators(),
      axisName: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
      },
      splitArea: {
        areaStyle: {
          color: [
            'rgba(255, 255, 255, 0.01)',
            'rgba(255, 255, 255, 0.02)',
            'rgba(255, 255, 255, 0.03)',
            'rgba(255, 255, 255, 0.04)',
            'rgba(255, 255, 255, 0.05)',
          ]
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.2)',
          width: 1
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.4)',
          width: 2
        }
      }
    },
    series: [
      {
        name: 'Pokemon Stats',
        type: 'radar',
        data: this.comparableData(),
        emphasis: {
          lineStyle: {
            width: 4
          }
        }
      }
    ]
  }));
}
