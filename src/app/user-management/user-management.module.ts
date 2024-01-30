import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
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
import { PopupcomponentComponent } from './popupcomponent/popupcomponent.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SaveEditPopupComponentComponent } from './save-edit-popup-component/save-edit-popup-component.component';
import { MatIconModule } from '@angular/material/icon';
import { CampsComponent } from './camps/camps/camps.component';
import { AddcampComponent } from './camps/addcamp/addcamp.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    DashboardComponent,
    SubadminComponent,
    RegistrationstaffComponent,
    PaginationPipe,
    AddsubadminComponent,
    PopupcomponentComponent,
    SaveEditPopupComponentComponent,
    CampsComponent,
    AddcampComponent,

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
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    NgxSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    NgxMaterialTimepickerModule
    
    
  ]
})
export class UserManagementModule { }
