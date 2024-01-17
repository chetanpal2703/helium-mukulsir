import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  dashboarddata:any;
  constructor(private http:HttpClient,private commonservice:CommonServiceService){
  }

  ngOnInit(): void {
    this.commonservice.getDashBoardData().subscribe((responce)=>{
      console.log("getting data for dashboard",responce);
      this.dashboarddata=responce;
      console.log(this.dashboarddata.data.camp_organized,"message")
    })
  }
  
}
