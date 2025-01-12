import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { BookSelectorComponent } from './book-selector/book-selector.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // {path: 'home', component: Home}
    {path: 'calendar', component: CalendarComponent},
    {path: 'reading-list', component: BookSelectorComponent},
    {path: '', redirectTo: '/reading-list', pathMatch: 'full'}
];