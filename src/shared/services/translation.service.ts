import { Injectable } from '@angular/core';
import { dictionary } from 'src/locale/translations-fr';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  public languages = ['fr', 'eng'];
  public language = 'fr';


  constructor() {}

  translate(key: string) {
    return dictionary[this.language].values[key];
  }
}
// https://malcoded.com/posts/translate-your-angular-app-with-pipes/