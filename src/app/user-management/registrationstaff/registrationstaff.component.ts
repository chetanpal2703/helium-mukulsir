import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-registrationstaff',
  templateUrl: './registrationstaff.component.html',
  styleUrls: ['./registrationstaff.component.css'],
  
})
export class RegistrationstaffComponent implements OnInit, AfterViewInit {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  userInfo:any ;
  registrationStaffList: any[] = [];
  dataSource: MatTableDataSource<any>;
  pagedItems: any[] = [];
  itemsPerPage = 5;
  currentPage = 1;

  displayedColumns: string[] = ['id', 'name', 'username', 'mobile_number'];
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log("userInfobyadmin",this.userInfo)
    // this.dataSource.paginator = this.paginator;
    console.log("dataSource",this.dataSource);
  }
  constructor(private commonservice:CommonServiceService){
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')) ;
    console.log("inside constructor of registrationstaff",this.userInfo)
    this.commonservice.getSubAdminList(this.userInfo.id, 2, this.userInfo.role.toLowerCase()).subscribe(
            (response) => {
              console.log("hey we did it",response.data);
              this.registrationStaffList = response.data;
              this.dataSource = new MatTableDataSource<any>(this.registrationStaffList);
              // this.dataSource.paginator = this.paginator;
            },
            (error) => {
              console.error(error);
            }
    );
  }
  // setPage(page: number) {
  //   this.currentPage = page;
  //   const startIndex = (page - 1) * this.itemsPerPage;
  //   this.pagedItems = this.dataSource.slice(startIndex, startIndex + this.itemsPerPage);
  // }

  setCurrentPage(page: number) {
    this.currentPage = page;
  }
  getPages(): number[] {
    const pageCount = Math.ceil(this.dataSource.data.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }
  // getPages(): number[] {
  //   // Calculate the total number of pages based on the count property
  //   const pageCount = Math.ceil(this.dataSource.page_size / this.itemsPerPage);
  
  //   // Generate an array of page numbers from 1 to pageCount
  //   return Array.from({ length: pageCount }, (_, index) => index + 1);
  // }
  
}
