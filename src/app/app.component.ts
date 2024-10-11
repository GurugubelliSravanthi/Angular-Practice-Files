import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalbindingComponent } from "./signalbinding/signalbinding.component";
import { OnewaybindingComponent } from "./onewaybinding/onewaybinding.component";
import { TwowaybindingComponent } from "./twowaybinding/twowaybinding.component";
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalbindingComponent, OnewaybindingComponent, TwowaybindingComponent, LoginComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularP';
}
