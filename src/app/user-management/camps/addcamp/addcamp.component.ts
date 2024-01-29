import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addcamp',
  templateUrl: './addcamp.component.html',
  styleUrls: ['./addcamp.component.css']
})
export class AddcampComponent implements OnInit {
  addCampForm:FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addCampForm=this.fb.group({
      camp_title:[''],
      camp_logo:[''],
      organized_by:[''],
      organizedbyimg:[''],
      Sponsor:[''],
      SponsorImage:[''],
      startDate:[''],
      endDate:['']
      
    })
  }
  onSubmitForm(){
    if(this.addCampForm.valid){
      console.log("formdata",this.addCampForm.value)
    }
  }
}
