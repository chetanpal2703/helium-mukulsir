import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupcomponent',
  templateUrl: './popupcomponent.component.html',
  styleUrls: ['./popupcomponent.component.css']
})
export class PopupcomponentComponent {
  selectedOptions: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<PopupcomponentComponent>) {}

  get selectOptions() {
    return this.data.selectOptions;
  }
  onSave() {
    console.log('Saving Selected Options:', this.selectedOptions);
    // You can perform further actions here, e.g., sending the selected options to the server
  }
  // selectedOptions() {
  //   const selectedOptions = this.selectOptions.filter(option => option.selected);
  //   this.dialogRef.close(selectedOptions);
  // }
}
