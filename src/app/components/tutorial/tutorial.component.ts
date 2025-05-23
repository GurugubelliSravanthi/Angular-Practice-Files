import { Component } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { angular, tut } from '../../models/tutorial.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent {
  j!: String
  p!: number
  a!: number[]

  public objj: tut[] = []

  public jo: angular[] = []
  
  constructor(private obj: TutorialService) {
    this.j = this.obj.getMeth()
    this.p=this.obj.getadd()
    this.a = this.obj.getar()
    this.objj = this.obj.gettut()
    this.jo = this.obj.getang()
}
}
