import { Component, ViewEncapsulation } from '@angular/core';

import { config } from './config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = config.title;

  sidenavOpened = false;

}
