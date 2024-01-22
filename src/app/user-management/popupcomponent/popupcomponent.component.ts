import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
interface Optioninterface {
  id: number;
  name?: string;
  sub_module?: [];
}
@Component({
  selector: 'app-popupcomponent',
  templateUrl: './popupcomponent.component.html',
  styleUrls: ['./popupcomponent.component.css']
})

export class PopupcomponentComponent {
  //selectedData:Optioninterface[]=[];
  mastercheckbox:any;
  selectall:boolean = false;
  alllcheckbox:boolean=false;
  selectedData:any = {}
  selectedOptions: any = {};
  subselectedoptionarray:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<PopupcomponentComponent>) {}

  get selectOptions() {
    return this.data.selectOptions;
  }
  onSave() {
    console.log(this.data);
    console.log('Saving Selected Options:', this.selectedData);
    // console.log(this.checking,"checking")
    console.log(this.selectedData,"selected  data")
    // You can perform further actions here, e.g., sending the selected options to the server
  }
  // selectedOptions() {
  //   const selectedOptions = this.selectOptions.filter(option => option.selected);
  //   this.dialogRef.close(selectedOptions);
  // }
  togglecheckbox(num:any){
    if(this.alllcheckbox){
      console.log("inside the tooglefunction")
      this.selectall=true;
      this.alllcheckbox=!this.alllcheckbox
      return;
    }
    this.selectall=!this.selectall
    console.log(this.selectall,"selectall")
    this.selectOptions.forEach((c)=>{
      if(c.id===num){
        console.log("inside the c.id")
        c.sub_module.forEach((sub)=>{
          // this.selectall=true;
          sub.selected=this.selectall
        })
      }
    })
  
    console.log(this.selectOptions,"hjfjsjjds")
  }
  checkboxchange(maincheckbox:any,subcheckbox:any){
    console.log(this.selectOptions,"giyan")
    console.log("inside this")
    let checking=this.isallcheckboxselected(maincheckbox,subcheckbox)
    console.log(checking,"cheking")
    // let subchecking =this.isonesubcheckboxselected(maincheckbox,subcheckbox)
    // console.log("subchecking",subchecking)
    if(this.isonesubcheckboxselected(maincheckbox,subcheckbox)){
      console.log("inside the onesubcheckfboxselected")

    }
    if(this.isallcheckboxselected(maincheckbox,subcheckbox)){
      console.log("i'm here")
      this.selectOptions.forEach((data)=>{
        if(data.id==maincheckbox){
          console.log("now in")
          this.alllcheckbox=true;
          this.togglecheckbox(maincheckbox)
        }
      })
    }
      
  }
  // isallcheckboxselected(maincheckbox:any,subcheckbox:any){
  //   this.selectOptions.forEach((main)=>{
  //     if(main.id==maincheckbox){
  //       return main.sub_module.every(data=>data.selected
  //       )
  //     }
  //     else return false;
  //   }
  //   )
  //   return false;
  // }
  isonesubcheckboxselected(maincheckbox: number, subcheckbox: number): boolean {
    const mainOption = this.selectOptions.find((main) => main.id === maincheckbox);
  
    if (mainOption) {
      // Check if at least one sub-checkbox is selected
      console.log("inside the function of ")
      return mainOption.sub_module?.some((sub) => sub.selected === true ) ;
    }
  
    return false;
  }
  
  isallcheckboxselected(maincheckbox: number, subcheckbox: number): boolean {
    const mainOption = this.selectOptions.find((main) => main.id === maincheckbox);
  
    if (mainOption) {
      return mainOption.sub_module.every((data) => data.selected);
    }
  
    return false;
  }
  
  
}
