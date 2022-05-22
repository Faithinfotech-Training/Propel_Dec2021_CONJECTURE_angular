import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName:any;
  roleName:any;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem('USERNAME');
    if(sessionStorage.getItem('ACCESS_ROLE')=='1'){
      this.roleName="Administrator";
    }else if(sessionStorage.getItem('ACCESS_ROLE')=='2'){
        this.roleName="Receptionist";
      }else if(sessionStorage.getItem('ACCESS_ROLE')=='3'){
        this.roleName="Pharmacist";
      }else if(sessionStorage.getItem('ACCESS_ROLE')=='4'){
        this.roleName="Lab Technician";
      }else if(sessionStorage.getItem('ACCESS_ROLE')=='5'){
        this.roleName="Doctor";
      }
    }
  
  goHome(){
    console.log("Go home");
    //dashboard of admin/coordinator/manager
    //logout
  }
    logOut(){
      this.authService.logOut();
      this.router.navigateByUrl('');
    }
  }
