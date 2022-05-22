import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient} from '@angular/common/http';
import {environment} from'src/environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  //declare variables--global
  patients: Patient[]; 
  formData: Patient=new Patient(); 

  constructor(private httpClient:HttpClient) { } //HttpClient
  
  getPatients()
  {
    this.httpClient.get(environment.apiUrl+'/api/patients') .toPromise().then(response =>
          this.patients=response as Patient[]);
  }

  insertPatient(pat: Patient) :Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+'/api/patients/',pat);
  }
  //update Patient
  updatePatient(pat: Patient) :Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+'/api/patients/',pat);
  }

  deletepatient(patid: number) :Observable<any>
  {
    return this.httpClient.get(environment.apiUrl+'/api/patientsde/'+patid);
  }

}
