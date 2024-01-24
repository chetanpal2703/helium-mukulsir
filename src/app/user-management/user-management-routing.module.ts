import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubadminComponent } from './subadmin/subadmin.component';
import { RegistrationstaffComponent } from './registrationstaff/registrationstaff.component';
import { AddsubadminComponent } from './addsubadmin/addsubadmin.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'subadmin',component:SubadminComponent},
  {path:'addsubadmin',component:AddsubadminComponent},

  {path:'registrationstaff',component:RegistrationstaffComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
