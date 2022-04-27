import { Component, OnInit } from '@angular/core';
import { EmployeeDto } from './../../../core/dtos/employee-dto';
import { EmployeeServiceService } from './../../../core/services/employee-service.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees!: EmployeeDto[];
  contrainsSearch = '';

  constructor(private employeeServiceSvc: EmployeeServiceService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeServiceSvc.read().subscribe((data: EmployeeDto[]) => {
      this.employees = data;
    });
  }

  onSearch(): void{
    const characters = this.contrainsSearch.length;
    if (characters >= 3){
      // console.log('Salir  buscar ' + this.employeeServiceSvc.capitalizeFirstLetter(this.contrainsSearch));
      this.employeeServiceSvc.getByNombreCedula(this.contrainsSearch).subscribe((data: EmployeeDto[]) => {
        this.employees = data;
      });
    }
  }

}
