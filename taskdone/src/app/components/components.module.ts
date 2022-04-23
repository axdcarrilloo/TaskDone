import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { ViewTaskComponent } from './view-task/view-task.component';



@NgModule({
  declarations: [
    MainMenuComponent,
    ViewTaskComponent
  ],
  imports: [
    CommonModule, MatMenuModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class ComponentsModule { }
