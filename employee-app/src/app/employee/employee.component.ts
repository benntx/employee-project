import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee: Employee = {
    id: 318033743,
    fname: 'Alex',
    lname: 'Gorbachov'
  };
    employee1: Employee = {
      id: 256325632,
      fname: 'yossi',
      lname: 'Cohen'
      };  
}
