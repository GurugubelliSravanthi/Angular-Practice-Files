import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface h{
  name: string
  age: number
}
@Component({
  selector: 'app-ngfor-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor-demo.component.html',
  styleUrl: './ngfor-demo.component.css'
})
export class NgforDemoComponent {
  s: h[] =[
    { name: "doly", age: 5 },
    { name: "doly", age: 5 },
    {name: "doly", age: 5 }
]
}
