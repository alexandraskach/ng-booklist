import { Injectable } from '@angular/core';
import { onSnapshotsInSync } from '@angular/fire/firestore';
import { Book } from 'src/models/book';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class BookService {
  private booksCollection: AngularFirestoreCollection<Book>;
  constructor(private store: AngularFirestore) {
    this.booksCollection = store.collection<Book>('book');
  }

  deleteBook(bookId: string) {
    this.booksCollection
      .doc(bookId)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getBookById(bookId: string) {
    return this.booksCollection.doc(bookId).valueChanges({ idField: 'id' });
  }
}
