import { platformBrowserDynamic  } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy  } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { XHRBackend } from '@angular/http';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
