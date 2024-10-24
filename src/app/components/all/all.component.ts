import hi from '@angular/common/locales/hi';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  one: String = "water"
  two: String = "lv"
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s" = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s";
  increment: number = 0
  event() {
    this.increment++
  }
  three = signal("hi papa")
  change() {
    this.three.set("hlooo")
  }
}