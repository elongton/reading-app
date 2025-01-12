import { createReducer, on } from '@ngrx/store';
import { Book } from '../books.model';
import { BookCollectionActions } from './books.actions';


export const initialState: ReadonlyArray<Book> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BookCollectionActions.retrieveBookList, (state, { books }) => books)
);