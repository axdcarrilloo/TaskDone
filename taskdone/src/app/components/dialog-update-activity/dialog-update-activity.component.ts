import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivityDto } from 'src/app/core/dtos/activity-dto';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { ActivityServiceService } from './../../core/services/activity-service.service';

@Component({
  selector: 'app-dialog-update-activity',
  templateUrl: './dialog-update-activity.component.html',
  styleUrls: ['./dialog-update-activity.component.css']
})
export class DialogUpdateActivityComponent implements OnInit {

  title = '';
  message = '';
  urlIcon = '';
  activityForm: FormGroup;

  constructor(
    private dialogConfirm: MatDialog,
    private activitySvc: ActivityServiceService,
    private fb: FormBuilder,
    public dialog: MatDialogRef<DialogUpdateActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]) { 
      this.activityForm = this.buildForm();
    }

  ngOnInit(): void {
  }
  
  showErrorUpdate(): void{
    const info = ['Error de modificacion',
      'No se pudo modificar esta actividad', 'warning'];
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

  showSuccessDialogue(): void{
    const info = ['Modificacion exitosa', 'La actividad se modifico satisfactoriamente', 'success'];
    this.dialogConfirm.open(
      DialogConfirmationComponent, {data: info
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
        window.location.reload();
      }else{
        console.log('Se rechazo');
      }
    });
  }

  update(): void{
    let actividadMain = this.activityForm.value;
    console.log(this.activityForm.value.responsable + "...!")
    // tslint:disable-next-line: deprecation
    this.activitySvc.update(actividadMain).subscribe((data: number) => {
      if (data !== 0){
        this.showSuccessDialogue();
      }else{
        this.showErrorUpdate();
      }
    });
  }

  buildForm(): FormGroup{
    return this.fb.group({
      id: [this.data[3].id,  []],
      codigo: [this.data[3].codigo,  []],
      estatus:[this.data[3].estatus,  []],
      fechaEjecucion: [this.data[3].fechaEjecucion,  []],
      diasRetraso: [this.data[3].diasRetraso,  []],
      responsable: [this.data[3].responsable,  []],
      nombreResponsable:[this.data[3].nombreResponsable,  []]
    });
  }

  save(event: Event): void{
  }

  confirmed() {
    this.dialog.close(true);
  }

}
