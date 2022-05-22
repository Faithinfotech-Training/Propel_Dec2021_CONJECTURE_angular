
import { Component, OnInit } from '@angular/core';
import {StaffService} from 'src/app/shared/staff.service'
import { Staff } from 'src/app/shared/staff';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
filter: String;
  page: number=1;
  constructor(public staffService: StaffService, private router: Router ) { }

  ngOnInit(): void {
    //life cycle hook
    this.staffService.getAllStaffs();
  }


  //populate taff Record
  populateStaffForm(sta: Staff){
    //changeing dateformat
    var datePipe = new DatePipe("en-UK");
    let formatedDate: any =datePipe.transform(sta.dateOfBirth,'yyyy-MM-dd');
    sta.dateOfBirth=formatedDate;
    console.log(sta.dateOfBirth)
    this.staffService.formData=Object.assign({},sta);


    var datePipe = new DatePipe("en-UK");
    let formatedDateOne: any =datePipe.transform(sta.dateOfJoin,'yyyy-MM-dd');
    sta.dateOfJoin=formatedDateOne;
    console.log(sta.dateOfJoin)
    this.staffService.formData=Object.assign({},sta);
  }

  //delete employee
  deleteStaff(staffID:number){
    if(confirm('Are you sure want to delete this record?')){
      this.staffService.deleteStaff(staffID).subscribe(response=>{
        this.staffService.getAllStaffs();
      },
      error=>{
      }
      )
    }
  }

  //update employee
  updateStaff(staffID: number){
    console.log(staffID);
    this.router.navigate(['staupdate',staffID]);
  }
}