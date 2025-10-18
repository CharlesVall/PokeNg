import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-bar',
  imports: [],
  templateUrl: './stat-bar.html',
  styleUrl: './stat-bar.scss'
})
export class StatBar {
  public statValue = input<string>('', { alias: "statValue" });

  public getStatColor(statString: string): string {
    const stat = Number.parseInt(statString);

    // Red to Yellow
    if (stat <= 0) return 'rgb(255, 0, 0)';
    if (stat <= 50) return 'rgb(255, 50, 0)';
    if (stat <= 70) return 'rgb(255, 102, 0)';
    if (stat <= 90) return 'rgb(255, 204, 0)';
    
    // Yellow to Green
    if (stat <= 110) return 'rgb(180, 255, 0)';
    if (stat <= 130) return 'rgb(90, 255, 0)';
    if (stat <= 150) return 'rgb(0, 255, 0)';
    
    // Green to Cyan
    if (stat <= 170) return 'rgb(0, 255, 100)';
    if (stat <= 190) return 'rgb(0, 255, 180)';
    if (stat <= 210) return 'rgb(0, 220, 255)';
    if (stat <= 230) return 'rgb(0, 180, 255)';
    
    return 'rgb(0, 150, 255)';
  }

  public getBarWidthInRem(statString: string): string {
    const stat = Number.parseInt(statString);

    const normalizedStatPoint = 15 / 255

    return `${stat * normalizedStatPoint}REM`
  }
}
