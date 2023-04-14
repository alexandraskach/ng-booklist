import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class BookService {
  bookListRef: AngularFirestoreCollection<unknown>;
  constructor(private fireStore: AngularFirestore) {
    this.bookListRef = fireStore.collection('book');
    
  }

  deleteBook(bookId: any) {
    this.bookListRef.doc(bookId).delete().then(()=>{
        console.log('Document successfully deleted!');
    }).catch((err)=>{
        console.log(err)
    });
  }
}