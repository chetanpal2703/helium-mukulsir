import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path:'login',loadChildren:()=>import('./login/login.module').then(mod=>mod.LoginModule)
  },
  {
    path:'side-nav',loadChildren:()=>import('./navbar/navbar.module').then(mod=>mod.NavbarModule)
  },
  {
    path:'user', loadChildren:()=> import('./user-management/user-management.module').then(mod =>mod.UserManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
