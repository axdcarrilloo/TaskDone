import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ViewTaskComponent } from './task/view-task/view-task.component';


@NgModule({
  declarations: [
    ViewTaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
