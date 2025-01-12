import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../books.model";

export const BooksActions = createActionGroup({
    source: "Display List",
    events: {
        'Add To Reading List': props<{book: Book}>(),
        'Remove from Reading List': props<{book: Book}>(),
    }
})

export const BookCollectionActions = createActionGroup({
    source: "Book API",
    events: {
        'Retrieve Book List': props<{books: ReadonlyArray<Book>}>(),
    }
})