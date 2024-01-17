import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.css']
})
export class SubadminComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  userInfo:any ;
  subAdmin: any[] = [];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'username', 'mobile_number'];
  ngAfterViewInit() {
    console.log("userInfobyadmin",this.userInfo)
    this.dataSource.paginator = this.paginator;
    console.log("dataSource",this.dataSource);
    
  }
  constructor(private commonservice:CommonServiceService,private route:Router){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')) ;
    console.log("inside constructor of subdmin",this.userInfo)
    this.commonservice.getSubAdminList(this.userInfo.id, 3, this.userInfo.role.toLowerCase()).subscribe(
            (response) => {
              console.log("hey we did it",response);
              this.subAdmin = response.data;
              this.dataSource = new MatTableDataSource<any>(this.subAdmin);
              this.dataSource.paginator = this.paginator;
            },
            (error) => {
              console.error(error);
            }
    );
  }
  redirectoaddsubadmin(){
    console.log("we are redirecting to addsubadmin page ")
    this.route.navigateByUrl('user/addsubadmin');
  }
}