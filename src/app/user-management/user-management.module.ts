import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarModule } from '../navbar/navbar.module';
import {MatCardModule} from '@angular/material/card';
import { SubadminComponent } from './subadmin/subadmin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RegistrationstaffComponent } from './registrationstaff/registrationstaff.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationPipe } from './pagination.pipe';
import {MatButtonModule} from '@angular/material/button';
import { AddsubadminComponent } from './addsubadmin/addsubadmin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SubadminComponent,
    RegistrationstaffComponent,
    PaginationPipe,
    AddsubadminComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    NavbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class UserManagementModule { }
