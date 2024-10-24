// employee.component.ts
import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  templateUrl: './employee.component.html',
  styles: [`
    h1 {
      font-size: 24px;
      color: darkblue;
    }
    button {
      margin: 10px 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  `],
  providers: [EmployeeService],
  imports:[CommonModule,HttpClientModule]
})
export class EmployeeComponent {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  loadEmployeeData() {
    this.employees = this.employeeService.getEmployeeData();
  }
}