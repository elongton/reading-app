import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
export const selectCollectionState = createFeatureSelector<ReadonlyArray<Book>>('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id)!);
//   }
// );