import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent implements OnInit {

  title = '';
  message = '';
  urlIcon = '';

  constructor(
    public dialog: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { }

  ngOnInit(): void {
    this.loadInfo(this.data);
  }

  confirmed(): void{
    this.dialog.close(true);
  }

  loadInfo(data: string[]): void{
    this.title = data[0];
    this.message = data[1];
    this.selectImage(data[2]);
  }

  selectImage(style: string): void{
    if (style === 'success'){
      this.urlIcon = './../../assets/Icon/success.png';
    }
    if (style === 'warning'){
      this.urlIcon = './../../assets/Icon/advertencia.png';
    }
  }

}
