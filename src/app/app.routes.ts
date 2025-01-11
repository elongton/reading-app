import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ReadingListGeneratorComponent } from './book-selector/book-selector.component';

export const routes: Routes = [
    // {path: 'home', component: Home}
    {path: 'calendar', component: CalendarComponent},
    {path: 'reading-list', component: ReadingListGeneratorComponent},
    {path: '', redirectTo: '/reading-list', pathMatch: 'full'}
];
