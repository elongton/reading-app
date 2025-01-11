import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { dummyList } from './dummyList';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book, DisplayBook } from '../types';

@Component({
  selector: 'book-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-selector.component.html',
  styleUrl: './book-selector.component.scss'
})

export class ReadingListGeneratorComponent {

  dummyBooks = dummyList;
  // displayedList: displayBook[] = this.dummyBooks;
  displayedList: WritableSignal<DisplayBook[]> = signal(this.dummyBooks);
  filterValue = ""
 

  ngInit(){
    console.log(this.dummyBooks)
  }

  onKeyUp(val: any){
    console.log(val)
    // console.log(this.filterValue)
    this.displayedList.set(this.dummyBooks.filter(book => book.title.includes(val)));
  }

  addToReadingList(book: DisplayBook){
    // this.readingList.update(r => [...r, book])
    book.inList = true;
  }
}
