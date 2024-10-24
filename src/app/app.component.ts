import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalbindingComponent } from "./components/signalbinding/signalbinding.component";
import { OnewaybindingComponent } from "./components/onewaybinding/onewaybinding.component";
import { TwowaybindingComponent } from "./components/twowaybinding/twowaybinding.component";
import { LoginComponent } from "./components/login/login.component";
import { NgforDemoComponent } from "./components/ngfor-demo/ngfor-demo.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ExampleComponent } from "./components/example/example.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { AllComponent } from "./components/all/all.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalbindingComponent, OnewaybindingComponent, TwowaybindingComponent, LoginComponent, NgforDemoComponent, CustomersComponent, ExampleComponent, EmployeeComponent, AllComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularP';
}
