import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OnewaybindingComponent } from './components/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { ExampleComponent } from './components/example/example.component';
import { NgforDemoComponent } from './components/ngfor-demo/ngfor-demo.component';
import { AllComponent } from './components/all/all.component';
import { StudentComponent } from './components/student/student.component';
import { UserComponent } from './components/user/user.component';
import { DemoComponent } from './components/demo/demo.component';

export const routes: Routes = [
  { path: 'dolly', component: LoginComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'onewaybinding', component: OnewaybindingComponent },
  { path: 'twowaybinding', component: TwowaybindingComponent },
  { path: 'examples', component: ExampleComponent },
  { path: 'demo', component: NgforDemoComponent },
  { path: 'all', component: AllComponent },
  { path: 'student', component: StudentComponent },
  { path: 'user', component: UserComponent },
  { path: 'demo2',component: DemoComponent},
];
