import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';


@Component({
  selector: 'app-addcamp',
  templateUrl: './addcamp.component.html',
  styleUrls: ['./addcamp.component.css']
})
export class AddcampComponent implements OnInit {
  addCampForm:FormGroup;
  assigntest:any;
  stateSubadmin: string[] = ['City 1', 'City 2', 'City 3','City 1', 'City 2', 'City 3']; 
  citySubadmin: string[] = ['City 1', 'City 2', 'City 3','City 1', 'City 2', 'City 3'];
  campSubadmin: string[] = ['City 1', 'City 2', 'City 3','City 1', 'City 2', 'City 3'];
  constructor(private fb: FormBuilder,private commonservice:CommonServiceService) {}

  ngOnInit(): void {
    this.addCampForm=this.fb.group({
      camp_title:[''],
      camp_logo:[''],
      organized_by:[''],
      organizedbyimg:[''],
      Sponsor:[''],
      SponsorImage:[''],
      startDate:[''],
      endDate:[''],
      startTime:[''],
      endTime:[''],
      country: [{ value: 'India', disabled: true }, Validators.required],
      state:[''],
      City:[''],
      Area:[''],
      PINCode:[''],
      AssignStateSubadmin: [[],Validators.required],
      AssignCitySubadmin:[[],Validators.required],
      AssignCampSubadmin:[[],Validators.required],
      AssignnoofDoctor:[''],
      AssignDoctor:[''],
      AssignNoofRegistrationStaff:[''],
      AssignRegistrationStaff:[''],
      AssignNoofTechnicians:[''],
      AssignTechnicians:[''],
      AssignNoofDispensers:[''],
      AssignDispensers:[''],
      AssignNoofMobilizer:[''],
      AssignMobilizer:[''],
      NoofScreening:[''],
      CreateABHAID:[''],
      description: ['', Validators.required],
      Test: ['', Validators.required],
      Price: ['', Validators.required],
      NoofScreeningassigntest: ['', Validators.required],
    })

    this.commonservice.getCampAssignTest().subscribe((test)=>{
      // console.log("Assign Test data",test)
      this.assigntest=test;
      console.log("Assign Test",this.assigntest)
    })
    
    console.log(this.addCampForm.get('startDate'),"start date")
  }
  onSubmitForm(){
    console.log("inside this ");

    console.log(this.addCampForm.get('startDate'),"start date")
    if(this.addCampForm.valid){
      console.log("formdata",this.addCampForm.value)
    }
  }
  areSpecificFieldsSelected(): boolean {
    const testSelected = this.addCampForm.get('Test').value !== '';
    const priceEntered = this.addCampForm.get('Price').value !== '';
    const screeningsEntered = this.addCampForm.get('NoofScreeningassigntest').value !== '';

    return testSelected && priceEntered && screeningsEntered;
  }
}
