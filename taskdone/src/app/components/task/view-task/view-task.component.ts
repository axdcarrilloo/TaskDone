import { Component, OnInit } from '@angular/core';
import { ActivityServiceService } from './../../../core/services/activity-service.service';
import { ActivityDto } from './../../../core/dtos/activity-dto';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  activities?: ActivityDto[];

  constructor(private activityServiceSvc: ActivityServiceService) { }

  ngOnInit(): void {
    this.read();
  }

  read(): void {
    this.activityServiceSvc.read().subscribe((data: ActivityDto[]) => {
      this.activities = data;
    });
  }

}
