import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Book } from '../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reading-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reading-list.component.html',
  styleUrl: './reading-list.component.scss'
})
export class ReadingListComponent {

  readingList: WritableSignal<Book[]> = signal([]);


  removeFromReadingList(book: Book){
    // this.readingList.update(r => r.filter(item => item.id !== book.id))
    // this.displayedList.update(r => {
    //   let bookToUpdate =  r.find(b => b.id === book.id);
    //   if (bookToUpdate?.inList){
    //     bookToUpdate.inList = false;
    //   };
    //   return r
    // })
  }
}
