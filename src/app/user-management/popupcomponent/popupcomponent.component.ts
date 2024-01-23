import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/services/common-service.service';

interface MyObject {
  module?: number;
  sub_module?: number[];
}

@Component({
  selector: 'app-popupcomponent',
  templateUrl: './popupcomponent.component.html',
  styleUrls: ['./popupcomponent.component.css']
})

export class PopupcomponentComponent {
  payloaddata:any;
  role_access:any[] = [];
  singleobject:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<PopupcomponentComponent>,private commonservice:CommonServiceService) {}

  get selectOptions() {
    return this.data.selectOptions;
  }
  onSave() {
    this.payloaddata=JSON.parse(localStorage.getItem('role_access'))

    console.log("localstorage",this.payloaddata)
    console.log("selectoptions",this.selectOptions)
    debugger
    this.selectOptions.forEach((data)=>{
      debugger
      if(data.selected){
        const obj: MyObject = {
          module: data.id,
          sub_module: []
        };
        
        data.sub_module.forEach((subdata)=>{
          if(subdata.selected)
            obj.sub_module.push(subdata.id)
        })
        this.singleobject=obj;
      }
      if(data.selected)
        this.role_access.push(this.singleobject);
    })
    this.payloaddata.role_access=this.role_access;
    console.log("finalpayload",this.payloaddata)
    console.log("role_access",this.role_access);
    // this.commonservice.addRoleToSubadmin(this.payloaddata).subscribe((data)=>{
    //   console.log("hey we have added the subadmin",data);
    //   this.commonservice.getRoleToSubadmin(10,2,'admin').subscribe((data)=>{
    //     console.log("we have successfully fetch the new added subadmin",data)
    //   })
    // })
  }

  togglecheckbox(num:any,event:any){
    console.log(num,"id");
    console.log(event.target.checked,"Event");
    this.selectOptions.forEach((data)=>{
      if(data.id==num){
        if(event.target.checked){
          data.sub_module.forEach((subdata)=>{
            subdata.selected=true
          })
        }
        else{
          data.sub_module.forEach((subdata)=>{
            subdata.selected=false
          })
        }
      }
    })
  }

  checkboxchange(maincheckbox:any,subcheckbox:any,event:any){
    let isanycheckboxselected=false;
    console.log(this.selectOptions,"giyan")
    console.log("inside this")
    this.selectOptions.forEach((data)=>{
      if(data.id==maincheckbox){
        data.sub_module.forEach((subdata)=>{
          if(subdata.selected){
            isanycheckboxselected=true
          }
        })
        if(isanycheckboxselected){
          data.selected=true;
        }
        else{
          data.selected=false;
        }
      }
    })   
  }
}
