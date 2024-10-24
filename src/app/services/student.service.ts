import { Injectable } from '@angular/core';
import {st, student, work } from '../models/student.model'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student: String = "welcome"
  red: number = 12
  numbers: number[] = [1, 2, 3]

  private ofc: work[] = [
    { age: 12, job: "software"},
    { age: 13, job: "hardware"}
  ]

  getWorks(): work[]
  {
    return this.ofc
  }

  private obj: student[] = [
    { id: 1, name: "doly" },
    { id:2, name: "prenyh"}
  ]



  private you: st[] = [
    {people:20,course:'java'}
  ]
  getst(): st[]{
    return this.you
  }



  getStudent(): student[]
  {
    return this.obj
  }
  
  getnumbers(): number[]{
    return this.numbers
  }
  
  getstudent(): String{
    return this.student
  }
  getred(): number{
    return this.red
  }
  constructor() { }

}
