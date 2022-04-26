import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivityServiceService } from 'src/app/core/services/activity-service.service';
import { EmployeeDto } from './../../core/dtos/employee-dto';
import { EmployeeServiceService } from './../../core/services/employee-service.service';
import { ActivityDto } from 'src/app/core/dtos/activity-dto';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-assing-responsible',
  templateUrl: './assing-responsible.component.html',
  styleUrls: ['./assing-responsible.component.css']
})
export class AssingResponsibleComponent implements OnInit {
  
  employees!: EmployeeDto[];
  activity!: ActivityDto;

  constructor(private dialogConfirm: MatDialog,
    private activitySvc: ActivityServiceService, private employeeServiceSvc: EmployeeServiceService,
    public dialog: MatDialogRef<AssingResponsibleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.activity = this.data[3];
  }

  updateActivity(idResponsable: number, nombre: string): void{
    // tslint:disable-next-line: deprecation
    this.activity.responsable = idResponsable;
    this.activity.nombreResponsable = nombre;
    console.log(this.activity);
    this.activitySvc.update(this.activity).subscribe((data: number) => {
      console.log(data);
    });
    window.location.reload();
  }

  loadEmployees(): void {
    this.employeeServiceSvc.read().subscribe((data: EmployeeDto[]) => {
      this.employees = data;
    });
  }

  assign(employee: EmployeeDto, index: number): void {
    this.updateActivity(employee.id, employee.nombre);
    this.dialog.close(true);
  }

}
