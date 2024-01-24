import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-save-edit-popup-component',
  templateUrl: './save-edit-popup-component.component.html',
  styleUrls: ['./save-edit-popup-component.component.css']
})
export class SaveEditPopupComponentComponent {
  payloaddata:any;
  editpopupdata:any;
  constructor(private dialogRef: MatDialogRef<SaveEditPopupComponentComponent>,private commonservice:CommonServiceService) {}

  onSaveClick() {
    // Implement your save logic here
  
    this.payloaddata=JSON.parse(localStorage.getItem('role_access'))
    this.editpopupdata= JSON.parse(localStorage.getItem('editpayload'))
    console.log("testdata",this.editpopupdata)
    this.payloaddata.role_access=this.editpopupdata;
    console.log("sending  the paylaod before the api hitting",this.payloaddata)
    this.commonservice.addRoleToSubadmin(this.payloaddata).subscribe((data)=>{
        console.log("hey we have added the subadmin",data);
        this.commonservice.getRoleToSubadmin(10,2,'admin').subscribe((data)=>{
          console.log("we have successfully fetch the new added subadmin",data)
        })
      })
    this.dialogRef.close('save');
  }

  onEditClick() {
    // Implement your edit logic here
    
    this.dialogRef.close('edit');
  }
}
