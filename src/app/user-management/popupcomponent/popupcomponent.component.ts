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
  
}
