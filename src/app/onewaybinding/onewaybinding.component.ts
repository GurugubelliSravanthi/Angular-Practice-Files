import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  standalone: true,
  imports: [],
  templateUrl: './onewaybinding.component.html',
  styleUrl: './onewaybinding.component.css'
})
export class OnewaybindingComponent {

  first: string = "helloooo"
  second: number = 12
incree: number=0
  count() {
    this.incree++
  }


  


}
