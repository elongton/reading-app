import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReadingListComponent } from './reading-list/reading-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReadingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reading-app';
}
