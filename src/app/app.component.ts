import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ReadingListComponent } from './reading-list/reading-list.component';
import { StoreModule } from '@ngrx/store';
import { readingListReducer } from './state/reading-list.reducer';
import { collectionReducer } from './state/collection.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterModule,
    ReadingListComponent,
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reading-app';
}
