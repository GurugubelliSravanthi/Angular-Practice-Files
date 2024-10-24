// services/employee.service.ts
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root', 
})
export class EmployeeService {
  private employeeData: Employee[] = [
    { id: 1, name: 'Sravanthi', age: 30 },
    { id: 2, name: 'Sahi', age: 25 },
    { id: 3, name: 'Dolly', age: 35 },
    { id: 4, name: 'Sravs', age: 40 },
    { id: 5, name: 'baby', age: 28 },
    { id: 6, name: 'Harsii', age: 32 },
    { id: 7, name: 'Niha', age: 29 },
    { id: 8, name: 'Pranathi', age: 45 },
    { id: 9, name: 'kavya', age: 38 },
    { id: 10, name: 'minnu', age: 26 },
  ];

  getEmployeeData(): Employee[] {
    return this.employeeData;
  }
}
