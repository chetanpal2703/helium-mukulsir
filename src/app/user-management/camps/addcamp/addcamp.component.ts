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
  campState:any;
  campCity:any;
  campDoctor:any;
  campMobilizer:any;
  campRegistrationStaff:any;
  campTechnicians:any;
  campDispensor:any;
  campUserListroleid8:any;
  campUserListroleid2:any;
  selectedFile: File | null = null;
  imageShow: any= '';
  imageShowCampLogo: string | ArrayBuffer | null = null;
  imageShowOrganizedByImg: string | ArrayBuffer | null = null;
  imageShowSponserByImg:any;
  constructor(private fb: FormBuilder,private commonservice:CommonServiceService) {}

  ngOnInit(): void {
    
    // formData.append(formcontronaem.value);
    

    this.addCampForm=this.fb.group({
      camp_title:[''],
      camp_logo:[null],
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
    // getting the assign test 
    this.commonservice.getCampAssignTest().subscribe((test)=>{
      // console.log("Assign Test data",test)
      this.assigntest=test.data;
      console.log("Assign Test",this.assigntest)
    })
    // getting the campState
    this.commonservice.getCampStateList(1).subscribe((state)=>{
      this.campState=state.data;
      console.log("State",state);
    })
    //getting the campuserlistroleid8
    this.commonservice.getCampUserList(8,'all').subscribe((userlist)=>{
      this.campUserListroleid8=userlist.data;
      console.log("userlistid8",this.campUserListroleid8);
    })
    //getting the campuserlistroleid2
    this.commonservice.getCampUserList(2,'all').subscribe((userlist)=>{
      this.campUserListroleid2=userlist.data;
      console.log("userlistid2",this.campUserListroleid2);
    })


    console.log(this.addCampForm.get('startDate'),"start date")
  }

  onGetCity(state: any){
    console.log(state.id);
    this.commonservice.getCampCity(state.id).subscribe((city:any)=>{
      this.campCity=city.data;
      // this.campCity=city['data'];
      console.log("campcity",this.campCity)
    })
    
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
  ongetcampremainingdata(data:any){
    console.log("Remaining",data);
    
      this.commonservice.getCampRemainingData(5,'city',1).subscribe((data)=>{
        console.log("data",data)
        this.campDoctor=data.data;
        console.log("campdoctor",this.campDoctor)
      })

      this.commonservice.getCampRemainingData(3,'city',1).subscribe((data)=>{
        console.log("data",data)
        this.campRegistrationStaff=data.data;
        console.log("campregistration",this.campRegistrationStaff)
      })

      this.commonservice.getCampRemainingData(4,'city',1).subscribe((data)=>{
        console.log("data",data)
        this.campTechnicians=data.data;
        console.log("campTechnicians",this.campTechnicians)
      })

      this.commonservice.getCampRemainingData(6,'city',1).subscribe((data)=>{
        console.log("data",data)
        this.campDispensor=data.data;
        console.log("campDispensor",this.campDispensor)
      })
      this.commonservice.getCampRemainingData(7,'city',1).subscribe((data)=>{
        console.log("data",data)
        this.campMobilizer=data.data;
        console.log("campMobilizer",this.campMobilizer)
      })
    
    
    // this.commonservice.getCampRemainingData()
    
  }

 
  onFileSelected(event: any,imageId:string) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('camp_image', file);
      console.log(formData);
      this.commonservice.uploadImage(formData).subscribe((data:any) => {
        console.log('Image uploaded ', data);
      });
    }
    var reader = new FileReader();
    console.log("reader",reader);
    reader.readAsDataURL(event.target.files[0]);
    switch (imageId) {
      case 'camp_logo':
        reader.onload=(event)=>{
          this.imageShowCampLogo = (<FileReader>event.target).result;
        }
        break;
      case 'organizedbyimg':
        reader.onload=(event)=>{
          this.imageShowOrganizedByImg = (<FileReader>event.target).result;
        }
        break;
      case 'sponserbyImg':
        reader.onload=(event)=>{
          console.log("inside this")
          this.imageShowSponserByImg = (<FileReader>event.target).result;
          console.log(this.imageShowSponserByImg)
        }
        break;
    }
    // reader.onload = (event) => {
    // this.imageShow = (<FileReader>event.target).result;
    // }
    
  }

}
