import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Student {
  name: string;
  registrationNumber: string;
  course: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [CommonModule], // Import CommonModule
})
export class TableComponent {
  // Sample data for the table
  students: Student[] = [
    { name: 'dolly', registrationNumber: 'REG123', course: 'Computer Science' },
    { name: 'prenyhh', registrationNumber: 'REG456', course: 'Mathematics' },
    { name: 'shyam', registrationNumber: 'REG789', course: 'Physics' },
    { name: 'harsi', registrationNumber: 'REG101', course: 'Biology' },
    { name: 'niharika', registrationNumber: 'REG102', course: 'History' },
    { name: 'kavya', registrationNumber: 'REG103', course: 'Chemistry' },
    { name: 'minnu', registrationNumber: 'REG104', course: 'English' },
    { name: 'bhargav', registrationNumber: 'REG105', course: 'Art' },
    { name: 'chaitu', registrationNumber: 'REG106', course: 'Philosophy' },
    { name: 'mounika', registrationNumber: 'REG107', course: 'Music' },
  ];
}
