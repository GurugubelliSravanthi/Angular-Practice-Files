import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  one: String = "sravs"
  image = "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
  size = 100
  link = "https://www.cutm.ac.in"
  two:number=0
  meth() {
    this.two++
  }
  alertt() {
    alert("dont open")
  }
  meths() {
    window.print()
  }
  h:String="helo"
  met() {
    this.h="hi"
  }
  links: boolean = true
  helcy() {
    this.links=!this.links
  }
  twoway: String = ""
  alerty() {
    alert("form subbmited")
  }
  japan: boolean = false
  helcyPapa() {
    this.japan=!this.japan
  }
t:String="ClickMe"
  tommy() {
    this.t="Button clicked"
  }
  paris: boolean = true
  dolly() {
    this.paris=!this.paris
  }
  courses:String=''
}
