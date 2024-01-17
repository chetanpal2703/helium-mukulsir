import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {Router} from '@angular/router'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  // @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  // isToggleVisible = false;

  constructor(private router: Router){

  }
  navigateTo(){
    // this.router.navigateByUrl('user/subadmin');
  }

}
