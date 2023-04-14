import { Component, OnInit } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Book } from 'src/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showHome = true;
  bookList: Book[] = [];
  menuItems: NbMenuItem[] = [
    { title: 'Home', link: '/home' },
    {
      title: 'Books',
      link: '/home/books',
    },
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

  ngOnInit(): void {}
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  collapseAll() {
    this.menuService.collapseAll('menu');
  }

  navigateHome() {
    this.menuService.navigateHome('menu');
  }

  getSelectedItem() {
    this.menuService
      .getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe((menuBag) => {
        this.selectedItem = menuBag.item.title;
        if (this.selectedItem === 'Home'){
         this.showHome= true;
        }else {
this.showHome= false;
        }
      });
  }
}

