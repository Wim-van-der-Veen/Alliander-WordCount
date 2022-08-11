import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  text$ = new BehaviorSubject(`this is my text; text and more text
  from me AND myself`);

  constructor() { }
}
