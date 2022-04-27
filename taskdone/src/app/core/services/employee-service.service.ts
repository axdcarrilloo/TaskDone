import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeDto } from '../dtos/employee-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<EmployeeDto> {
    return this.http.get<EmployeeDto>(environment.EMPLOYEE_GETBYID + id);
  }

  read(): Observable<EmployeeDto[]>{
    return this.http.get<EmployeeDto[]>(environment.EMPLOYEE_GETALL);
  }

  capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  getByNombreCedula(consulta: string): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(environment.EMPLOYEE_GETBYNOMBRE_CEDULA + consulta);
  }

}
