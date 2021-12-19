import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './list-employees';

import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    //const employees = of(EMPLOYEES);
    //return employees;
    this.messageService.add('Employee Service message: all employees were updated!');
    return this.http.get<Employee[]>(this.employeesUrl).pipe(tap(_ => this.log('fetched employees')),(catchError(this.handleError<Employee[]>('getEmployees', [])))
    );
    }
    getEmployee(id: number): Observable<Employee> {
      //const employee = EMPLOYEES.find(h => h.id === id)!;
      //return of(employee);
      this.messageService.add(`Employee Service: fetched employee id=${id}`);
      const url = `${this.employeesUrl}/${id}`;
      return this.http.get<Employee>(url).pipe(tap(_ => this.log(`fetched employee id=${id}`)),catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      )};
    private log(message: string) {
        this.messageService.add(`Employee Service: ${message}`);
      }
    private employeesUrl = 'api/employees'; // URL to web api
    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
      };
      
      }
      updateEmployee(employee: Employee): Observable<any> {
        return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>('updateEmployee'))
        );
        }
        httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };  
    constructor(private http: HttpClient, private messageService: MessageService) { }
}
