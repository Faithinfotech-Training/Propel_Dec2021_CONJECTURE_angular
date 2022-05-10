import { Injectable } from '@angular/core';
import { Labtest } from './labtest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LabTestPrescribed } from './lab-test-prescribed';

@Injectable({
  providedIn: 'root'
})
export class LabTestPrescribedService {

  labTestPrescribed: LabTestPrescribed[];
  formData: LabTestPrescribed = new LabTestPrescribed();
  tests: Labtest[];

  constructor(private httpClient: HttpClient) { }

  // insert consultation test
  insertConsultationTest(contest: LabTestPrescribed): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/labpres/',contest);
  }

  // update consultation test
  updateConsultationTest(contest: LabTestPrescribed): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/labpres/',contest);
  }

  // Get labtests from dropdownList
  // get all labtests or Method for Binding all labtests
  getAllTests(){
    this.httpClient.get(environment.apiUrl+'/api/labtests')
      .toPromise().then(response =>
        this.tests= response as Labtest[]);
  }
}
