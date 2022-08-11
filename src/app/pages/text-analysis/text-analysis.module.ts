import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { TextAnalysisComponent } from './text-analysis.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TextAnalysisComponent }]),
    FormsModule,
    MatCardModule,
  ],
  declarations: [
    TextAnalysisComponent,
  ],
  exports: [
  ],
})
export class TextAnalysisModule { }


