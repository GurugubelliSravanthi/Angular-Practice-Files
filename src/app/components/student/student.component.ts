import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { st, student, work } from '../../models/student.model';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  teacher!: String
  black!: number
  num!: number[]
  public objj!: student[]
  public ofc!: work[]
  public you!: st[]
  constructor(private obj: StudentService) {
    this.black=this.obj.getred()
    this.teacher = this.obj.getstudent()
    this.num = this.obj.getnumbers()
    this.objj= this.obj.getStudent()
    this.ofc = this.obj.getWorks()
    this.you = this.obj.getst()
  }
  
}
