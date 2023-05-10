import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/models/book';
import { BookService } from 'src/shared/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookId: string ='';
  book?: Book;
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log('params', params);
        this.bookId= params['id'];
        console.log( this.bookId);
      },
      error: (error) => {
        console.log("Impossible de récupérer l'id, activatedRoute", error);
      },
    })
   this.bookService.getBookById(this.bookId).subscribe((value)=>{
   console.log(value)
   this.book = value;
   })
     
  }
}
