import { Timestamp } from '@angular/fire/firestore';

export class Book {
  id!: string;
  title!: string;
  author!: string;
  cover!: string;
  published_date!: Timestamp;
}
