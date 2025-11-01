import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { API_URL } from '@core/tokens/api-url.token';
import { APP_LANGUAGE } from '@core/tokens/app-language.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    providePrimeNG({
        theme: {
          preset: Aura,          
          options: {
            darkModeSelector: '.app-dark'
          }
        }
    }),
    {provide: API_URL, useValue: 'https://pokeapi.co/api/v2'},
    {provide: APP_LANGUAGE, useValue: 'en'}
  ]
};
