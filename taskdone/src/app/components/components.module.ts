import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTaskComponent } from './task/view-task/view-task.component';


@NgModule({
  declarations: [
    ViewTaskComponent
  ],
  imports: [
    CommonModule, 
  ],
  exports: [
  ]
})
export class ComponentsModule { }
