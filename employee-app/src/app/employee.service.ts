import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './list-employees';

import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {

    const employees = of(EMPLOYEES);
    
    this.messageService.add('Employee Service message: all employees were updated!');
    
    return employees;
    
    }

    constructor(private messageService: MessageService) { }
}
