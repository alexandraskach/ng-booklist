import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  bookList: Book[] = [];
  menuItems: NbMenuItem[] = [
    { title: 'Home', link: '/home' },
    { title: 'Books', link: '/books' },
    { title: 'Add book', link: '/add-book' },
  ];
  private destroy$ = new Subject<void>();
  selectedItem: string = '';

  constructor(
    private store: Firestore,
    private fireAuth: Auth,
    private menuService: NbMenuService
  ) {
    const books = collection(this.store, 'book');
    collectionData(books).subscribe((value) => {
      this.bookList = value as Book[];
      console.log('bookList', value);
    });
  }
}
