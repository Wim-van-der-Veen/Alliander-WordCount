import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolbarComponent,
    FooterComponent,
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
  ],
})
export class ComponentsModule { }
