import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ActivityServiceService } from './services/activity-service.service';
import { EmployeeServiceService } from './services/employee-service.service';

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    HttpClientModule
  ],
  providers: [
    ActivityServiceService,
    EmployeeServiceService
  ]
})

export class CoreModule { }
