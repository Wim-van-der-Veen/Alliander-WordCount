import { Component, OnInit } from '@angular/core';

import { TextService } from 'src/app/services/text.service';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  set text(newText: string) {
    this.textService.text$.next(newText);
  }
  get text(): string {
    return this.textService.text$.getValue();
  }

  placeholder = 'voer hier de te analyseren tekst in';
  hint = 'alle teksten worden ge-accepteerd';

  constructor(
    private textService: TextService,
  ) { }

  ngOnInit(): void {
  }

}
