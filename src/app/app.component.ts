import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReadingListComponent } from './reading-list/reading-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reading-app';
}
