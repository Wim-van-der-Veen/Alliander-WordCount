import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TextInputComponent } from './text-input.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TextInputComponent }]),
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    TextInputComponent,
  ],
  exports: [
  ],
})
export class TextInputModule { }
