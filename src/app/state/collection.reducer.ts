import { createReducer, on } from '@ngrx/store';
import { Book } from '../books.model';
import { BookCollectionActions } from './books.actions';
import { dummyList } from './dummyList';

export const initialState: ReadonlyArray<Book> = dummyList;

export const collectionReducer = createReducer(
  initialState,
  on(BookCollectionActions.retrieveBookList, (state, { books }) => books)
);