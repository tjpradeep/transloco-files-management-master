import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TranslocoConfig
} from '@ngneat/transloco';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { HttpClientModule } from '@angular/common/http';
import {DemoLibModule} from '@transloco-files-management/demo-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoModule, DemoLibModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        prodMode: environment.production
      } as TranslocoConfig
    },
    translocoLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
