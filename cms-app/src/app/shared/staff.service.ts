import { Injectable } from '@angular/core';
import { Staff } from './staff';
import { HttpClient} from '@angular/common/http';
import {environment} from'src/environments/environment'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class StaffService {

  //declare variables--global
  staffs: Staff[]; //list of all employees
  //departments: Department[]; //list of all employees
  formData: Staff=new Staff(); //store date in an employee

  constructor(private httpClient:HttpClient) { } //HttpClient

  //get All the Employess or Method for Binding all Employees
  getAllStaffs()
  {
    this.httpClient.get(environment.apiUrl+'/api/staffs')
      .toPromise().then(response =>
          this.staffs=response as Staff[]);
  }
  //get a particular Employee by id
  getStaff(staffID: number) :Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+'/api/staffs/'+staffID);
  }
  //insert Employee
  insertStaff(sta: Staff) :Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+'/api/staffs/',sta);
  }
  //update Employee
  updateStaff(sta: Staff) :Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+'/api/staffs/',sta);
  }

  //delete Employee
  deleteStaff(staffID: number) :Observable<any>
  {
    return this.httpClient.delete(environment.apiUrl+'/api/staffs/'+staffID);
  }

 /* //GET Department for dropdownlist
  getAllDepartments(){
    this.httpClient.get(environment.apiUrl+'/api/department')
      .toPromise().then(response =>
        this.departments=response as Department[])
        
  }*/
}
