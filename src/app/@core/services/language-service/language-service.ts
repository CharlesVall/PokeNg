import { inject, Injectable, Signal, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translate = inject(TranslateService)

  private _actualAppLanguage = signal(this.translate.getCurrentLang())

  public actualAppLanguage = this._actualAppLanguage.asReadonly()

  public switchAppLanguage(newLanguage: string): void {
    this.translate.use(newLanguage);
    this._actualAppLanguage.set(newLanguage);
  }

  public getAppLanguage(): Signal<string> {
    return this.actualAppLanguage
  }
}
