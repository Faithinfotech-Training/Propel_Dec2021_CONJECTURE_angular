import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Testpresctib} from './testpresctib';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestpresctibService {
  //declare variable
  testPrescris:Testpresctib[];

  constructor(private httpClient:HttpClient) { }

  //get all appointment detials
  getAllTestPre(appoinId:number){
    this.httpClient.get(environment.apiUrl+'/api/labpres/dto/'+appoinId)
    .toPromise().then(response=> this.testPrescris= response as Testpresctib[] );
    
}
}
