import { Injectable } from '@angular/core';
import { apple } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private hi: apple[] = [
  {age:20,udo:"harsi"}
  ]
  getmeth(): apple[]{
    return this.hi
  }
  constructor() { }
}
