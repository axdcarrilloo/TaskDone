import { Component, OnInit } from '@angular/core';
import { ActivityServiceService } from './../../../core/services/activity-service.service';
import { ActivityDto } from './../../../core/dtos/activity-dto';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../../dialog-confirmation/dialog-confirmation.component';
import { DialogUpdateActivityComponent } from '../../dialog-update-activity/dialog-update-activity.component';
import { AssingResponsibleComponent } from '../../assing-responsible/assing-responsible.component';
import { EmployeeServiceService } from './../../../core/services/employee-service.service';
import { EmployeeDto } from './../../../core/dtos/employee-dto';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  activities?: ActivityDto[];

  constructor(private dialogConfirm: MatDialog, private employeeServiceSvc: EmployeeServiceService,
    private activityServiceSvc: ActivityServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.read();
  }

  showErrorUpdate(info: string[]): void{
    this.dialogConfirm.open(
      DialogConfirmationComponent, {data: info
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

  showSuccessDialogue(info: string[]): void{
    this.dialogConfirm.open(
      DialogConfirmationComponent, {data: info
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        this.read();
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

  getEmployeeById(idResponsable: number): any{
    this.employeeServiceSvc.getById(idResponsable).subscribe((data: EmployeeDto) => {
      return data;
    });
  }

  assign(activity: ActivityDto): void {
    const info = ['Asignar responsable', '', 'success', activity];
    this.dialog.open(AssingResponsibleComponent, {data: info}).afterClosed()
    // tslint:disable-next-line: deprecation
    .subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
    this.read();
  }

  update(actividad: ActivityDto): void {
    const info = ['Modificacion exitosa', 'La actividad se elimino satisfactoriamente', 'success', actividad];
    this.dialog.open(DialogUpdateActivityComponent, {data: info}).afterClosed()
    // tslint:disable-next-line: deprecation
    .subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
    this.read();
  }

  read(): void {
    this.activityServiceSvc.read().subscribe((data: ActivityDto[]) => {
      this.activities = data;
    });
  }

  delete(actividad: ActivityDto, index: number): void {
    this.activityServiceSvc.delete(actividad).subscribe((data: number) => {
      if(data !== 0) {
        const info = ['Eliminacion exitosa', 'La actividad se elimino satisfactoriamente', 'success'];
        this.showSuccessDialogue(info);
      }else {
        const info = ['Eliminacion Errada', 'La actividad no se pudo eliminar', 'success'];
        this.showErrorUpdate(info);
      }
    });
  }

}
