import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { EMPLOYEES } from '../list-employees';
import { EmployeeService } from '../employee.service';

import { MessageService } from '../messages.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {

    this.selectedEmployee = employee;
    
    this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
    
    }

    constructor(private employeeService: EmployeeService, private messageService: MessageService) {}
  getEmployees(): void {
    //this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
    }

  ngOnInit(): void {
    this.getEmployees();
  }

  delete(employee: Employee): void {

    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
    }
}
