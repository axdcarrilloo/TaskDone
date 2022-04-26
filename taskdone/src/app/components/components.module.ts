import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { ViewTaskComponent } from './task/view-task/view-task.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { DialogUpdateActivityComponent } from './dialog-update-activity/dialog-update-activity.component';
import { AssingResponsibleComponent } from './assing-responsible/assing-responsible.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';


@NgModule({
  declarations: [
    ViewTaskComponent,
    DialogConfirmationComponent,
    DialogUpdateActivityComponent,
    AssingResponsibleComponent,
    ViewEmployeeComponent
  ],
  imports: [
  CommonModule,
    MatCardModule,
    MatButtonModule, MatDialogModule,
    MatFormFieldModule, FormsModule, ReactiveFormsModule,
    MatInputModule, MatSelectModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
