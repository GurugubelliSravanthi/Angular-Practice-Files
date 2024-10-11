import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signalbinding',
  standalone: true,
  imports: [],
  templateUrl: './signalbinding.component.html',
  styleUrl: './signalbinding.component.css'
})
export class SignalbindingComponent {
  varsey = signal("java")
  
  changevalue() {
    this.varsey.set('python')
  }
 }
