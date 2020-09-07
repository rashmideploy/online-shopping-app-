import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/About/about.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EventsComponent } from './components/events/events.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'emp', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'eventservice', component: EventsComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'userlist', component: UserComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'bindingdemo', component: BindingsdemoComponent },
  { path: 'styledemo', component: NgclassdemoComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
