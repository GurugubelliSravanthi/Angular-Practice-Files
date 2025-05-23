import { Injectable } from '@angular/core';
import { angular, tut } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  public obj: tut[] = [
   {id:1,name:"dolly"}
  ]
  gettut() :tut[]{
    return this.obj
  }

  constructor() { }
  public ik: angular[] = [
  {age:20}
  ]
  getang(): angular[] {
  return this.ik
}

  java: String = "course"
  getMeth() {
    return this.java
  }
  python: number=2
  getadd() {
  return this.python
  }
  arr: number[] = [1, 2, 3]
  getar() {
    return this.arr
  }
}
