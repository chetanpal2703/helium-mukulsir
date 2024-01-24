import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupcomponentComponent } from '../popupcomponent/popupcomponent.component';
import { SubAdmin } from './subAdminInterface';
import {Router } from '@angular/router';

@Component({
  selector: 'app-addsubadmin',
  templateUrl: './addsubadmin.component.html',
  styleUrls: ['./addsubadmin.component.css']
})
export class AddsubadminComponent {
  form: FormGroup;
  indianStates: string[] = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
  accessRoles: any;
  role_accessbyme:any={};
  payLoadToSend:any;
  datawithselectedprop:any;
  checkboxForm: FormGroup;
  constructor(private fb: FormBuilder,private commonservice:CommonServiceService, private dialog: MatDialog,private route:Router) { }

  ngOnInit(): void {
    
    this.role_accessbyme=[{module: 1, sub_module: [1, 2, 3, 4, 5, 6]}]
    this.commonservice.addSubadminData().subscribe((responce)=>{
      console.log("addsubadmindata",responce)
      this.accessRoles=responce;
      this.datawithselectedprop=responce;
      this.datawithselectedprop.data.forEach((module) => {
        module.selected = false; // Add selected property to module
        if (module.sub_module) {
          module.sub_module.forEach((subModule) => {
            subModule.selected = false; // Add selected property to sub-module
          });
        }
      });
    })
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      level: ['', Validators.required],
      state: ['']
    });
  }
  onLevelChange() {
    console.log("inside this level onlevelchanges function")
    console.log("accessroles",this.accessRoles.data)
    if (this.form.get('level').value !== 'state') {
      this.form.get('state').setValue('hi');
    }
    console.log("selectedpropdata",this.datawithselectedprop)
  }
  onSubmit() {
    console.log("hi")
    let subAdmin = new SubAdmin();
    subAdmin.name = this.form.get('name')?.value;
    subAdmin.email_id=this.form.get('email')?.value;
    subAdmin.mobile_number=this.form.get('mobile')?.value;
    // subAdmin.role_access=[];
    // subAdmin.level=this.form.get('level')?.value;
    // subAdmin.state=this.form.get('state')?.value;
    // subAdmin.role_access=this.role_accessbyme;
    // subAdmin.role_access = localStorage.getItem('roleAccess');
    console.log("subadminname",subAdmin.role_access)
    localStorage.setItem('role_access',JSON.stringify(subAdmin))
    

    if (this.form.valid) {
      // Form is valid, perform your submission logic here
      console.log(this.form.value);
      console.log("paylaod-data we are sending ",subAdmin)
      
      
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '400px';

    // Pass any data needed for the popup (e.g., options for the select)
    dialogConfig.data = {
      selectOptions: this.datawithselectedprop.data
    };

    // Open the popup
    const dialogRef = this.dialog.open(PopupcomponentComponent, dialogConfig);

    // Handle dialog close event if needed
    dialogRef.afterClosed().subscribe(result => {
      // this.route.navigateByUrl('user/subadmin');
      console.log('Dialog closed', result);
    });
    }
  }
}
