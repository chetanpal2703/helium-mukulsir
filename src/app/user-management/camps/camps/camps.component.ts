import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent {
  response:any
  camptabledata:any;
  constructor(private commonservice:CommonServiceService ){
    this.commonservice.getCampDataTable(1,'admin').subscribe((responce)=>{
      console.log("responce",responce)
      this.response=responce;
      this.camptabledata=responce.results;
      console.log("camptabledata",this.camptabledata);
    })
  }
}
