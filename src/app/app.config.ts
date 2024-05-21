import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { importProvidersFrom } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, ),
    importProvidersFrom(FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()),
    provideAnimationsAsync()
  ]
};