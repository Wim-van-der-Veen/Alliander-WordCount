import { Component, OnInit } from '@angular/core';

import { config } from '../../config/config';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.scss']
})
export class FallbackComponent implements OnInit {

  title = config.title;
  
  constructor() { }

  ngOnInit(): void {
  }

}
