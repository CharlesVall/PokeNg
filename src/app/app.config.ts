import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideEchartsCore } from 'ngx-echarts';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from 'environments/environment';
import { routes } from './app.routes';
import { API_URL } from '@core/tokens/api-url.token';
import { APP_LANGUAGE } from '@core/tokens/app-language.token';
import { echarts } from './echarts.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideEchartsCore({ echarts }),
    providePrimeNG({
      theme: {
        preset: Aura,          
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    }),
    
    provideTranslateService({
      defaultLanguage: environment.defaultLanguage,
      loader: provideTranslateHttpLoader({
        prefix: environment.translationPath,
        suffix: '.json'
      })
    }),
    
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: APP_LANGUAGE, useValue: environment.defaultLanguage },
  ]
};