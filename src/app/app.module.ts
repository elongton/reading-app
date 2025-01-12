import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { readingListReducer } from './state/reading-list.reducer';
import { collectionReducer } from './state/collection.reducer';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot({ books: readingListReducer, collection: collectionReducer })
  ],
})
export class AppModule { }