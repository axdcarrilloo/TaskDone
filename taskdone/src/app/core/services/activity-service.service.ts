import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ActivityDto } from './../dtos/activity-dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {

  constructor(private http: HttpClient) { }

  read(): Observable<ActivityDto[]>{
    return this.http.get<ActivityDto[]>(environment.ACTIVITY_GETALL);
  }
}
