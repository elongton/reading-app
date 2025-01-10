import { Component, signal } from '@angular/core';
import { dummyList } from './dummyList';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type book = {
  title: string,
  author: string,
  published: number,
  coverImage: string
}

@Component({
  selector: 'app-reading-list-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reading-list-generator.component.html',
  styleUrl: './reading-list-generator.component.scss'
})

export class ReadingListGeneratorComponent {

  dummyBooks = dummyList;
  displayedList: book[] = this.dummyBooks;
  filterValue = ""

  ngInit(){
    console.log(this.dummyBooks)
  }

  onKeyUp(val: any){
    console.log(val)
    // console.log(this.filterValue)
    this.displayedList = this.dummyBooks.filter(book => book.title.includes(val));
  }



}
