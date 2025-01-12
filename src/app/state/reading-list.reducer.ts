import { createReducer, on } from '@ngrx/store';
import { Book } from '../books.model';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const readingListReducer = createReducer(
  initialState,
  on(BooksActions.addToReadingList, (state, { book }) => {
    return [...state, book]
  }),
  on(BooksActions.removeFromReadingList, (state, { book }) => {
    const newState = state.filter(b => book.id !== b.id);
    return newState
  })
);