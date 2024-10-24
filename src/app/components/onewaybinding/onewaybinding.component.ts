import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  standalone: true,
  imports: [],
  templateUrl: './onewaybinding.component.html',
  styleUrl: './onewaybinding.component.css'
})
export class OnewaybindingComponent {
imageikii='https://i.etsystatic.com/22966189/r/il/5ab71a/2344484538/il_570xN.2344484538_cmq6.jpg'
  first: string = "helloooo"
  second: number = 12
incree: number=0
  count() {
    this.incree++
  }
  meth() {
    alert("dont open")
  }

  


}
