import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../list-employees';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees = EMPLOYEES;
  selectedEmployee?: Employee;
  onSelect(employee :Employee): void {
    this.selectedEmployee = employee;
  }

  constructor() { }

  ngOnInit(): void {
  }
    // employee: Employee = {
    //   id: 318033743,
    //   fname: 'Alex',
    //   lname: 'Gorbachov',
    //   dateofbirth: "1/2/2001",
    //   salary: "5000",
    //   email: "asf@hmail.com"
    // };

    // employee1: Employee = {
    //   id: 256325632,
    //   fname: 'yossi',
    //   lname: 'Cohen',
    //   dateofbirth: "1/2/2001",
    //   salary: "5000",
    //   email: "asf@hmail.com"
    // };
    
    // employee2: Employee = {
    //   id: 256325632,
    //   fname: 'yossi',
    //   lname: 'Cohen',
    //   dateofbirth: "1/2/2001",
    //   salary: "5000",
    //   email: "asf@hmail.com"
    // };  

    // employee3: Employee = {
    //   id: 256325632,
    //   fname: 'yossi',
    //   lname: 'Cohen',
    //   dateofbirth: "1/2/2001",
    //   salary: "5000",
    //   email: "asf@hmail.com" 
    // };  
}
