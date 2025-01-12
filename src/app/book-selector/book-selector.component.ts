import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book, DisplayBook } from '../books.model';
import { Store } from '@ngrx/store';
import { selectBooks, selectCollectionState } from '../state/book.selectors';

@Component({
  selector: 'book-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-selector.component.html',
  styleUrl: './book-selector.component.scss',
})
export class BookSelectorComponent {

  constructor(private store: Store){}
  // dummyBooks = [];
  // displayedList: WritableSignal<DisplayBook[]> = signal(this.dummyBooks);
  displayedList = this.store.select(selectCollectionState);
  filterValue = '';

  ngOnInit() {
    this.displayedList.subscribe(r => console.log(r));
  }

  onKeyUp(val: any) {
    console.log(val);
    // this.displayedList.set(
    //   this.dummyBooks.filter((book) => book.title.includes(val))
    // );
  }

  addToReadingList(book: DisplayBook) {
    // this.readingList.update(r => [...r, book])
    book.inList = true;
  }
}
