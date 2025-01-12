import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { readingListReducer } from './state/reading-list.reducer';
import { collectionReducer } from './state/collection.reducer';
import { AppComponent } from './app.component';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BookSelectorComponent } from './book-selector/book-selector.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';



@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: readingListReducer, collection: collectionReducer }),
    FormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent,
    ReadingListComponent,
    CalendarComponent,
    BookSelectorComponent],
  bootstrap: [AppComponent,
    ReadingListComponent,
    CalendarComponent,
    BookSelectorComponent
  ],
  // exports: [AppRoutingModule]
})
export class AppModule { }