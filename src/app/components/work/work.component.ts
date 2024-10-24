import { Component } from '@angular/core';
import { WorkService } from '../../services/work.service';
import { apple } from '../../models/work.model';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  public happy!: apple[]
  constructor(private obj: WorkService) {
    this.happy=this.obj.getmeth()
  }
}