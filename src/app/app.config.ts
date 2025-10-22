import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideNgxRepository } from '@paddls/ngx-repository';
import { provideNgxHttpRepository } from '@paddls/ngx-http-repository';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

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
    provideNgxRepository({
      normalizerConfiguration: {
        denormalizeNull: true,
        normalizeNull: false,
        denormalizeUndefined: true,
        normalizeUndefined: false
      }
    }),
    provideNgxHttpRepository({
      debug: true
    })
  ]
};
