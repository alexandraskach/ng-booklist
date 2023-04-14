import { Timestamp } from '@angular/fire/firestore';

export interface Book {
  title: string;
  author: string;
  cover: string;
  published_date: Timestamp;
}
