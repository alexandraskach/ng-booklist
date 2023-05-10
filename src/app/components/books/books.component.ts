import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Book } from 'src/models/book';
import { BookService } from 'src/shared/services/book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  private booksCollection: AngularFirestoreCollection<Book>;
  bookList: Book[] = [];
  menuItems: NbMenuItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Books', link: '/books' },
    { title: 'Add book', link: '/add-book' },
  ];
  selectedItem: string = '';
  collection: any;
  constructor(
    private store: AngularFirestore,
    private fireAuth: Auth,
    private menuService: NbMenuService,
    private bookService: BookService
  ) {
    this.booksCollection = store.collection<Book>('book');
     this.booksCollection.valueChanges({ idField: 'id' }).subscribe(value=>{
       this.bookList = value;
        console.log(value);
     })
  }

  deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId);
  }
}
