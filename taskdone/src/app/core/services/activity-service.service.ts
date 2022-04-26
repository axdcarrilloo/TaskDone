import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ActivityDto } from './../dtos/activity-dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityServiceService {

  constructor(private http: HttpClient) { }

  delete(playload: ActivityDto): Observable<number>{
    return this.http.delete<number>(environment.ACTIVITY_DELETEBYID + playload.id);
  }

  update(playload: any): Observable<number>{
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    const options = ({ headers: header });
    console.log(playload);
    return this.http.put<number>(environment.ACTIVITY_UPDATE, playload, options);
  }

  read(): Observable<ActivityDto[]>{
    return this.http.get<ActivityDto[]>(environment.ACTIVITY_GETALL);
  }
}
