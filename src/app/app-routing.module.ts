import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeModule } from './employee/employee.module';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'emp1',loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
