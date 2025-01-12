import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { readingListReducer } from './state/reading-list.reducer';
import { collectionReducer } from './state/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore({ books: readingListReducer, collection: collectionReducer })
  ]
};
