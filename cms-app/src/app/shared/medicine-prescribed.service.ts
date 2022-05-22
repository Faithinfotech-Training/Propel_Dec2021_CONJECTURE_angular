import { Injectable } from '@angular/core';
import { MedicinePrescribed } from './medicine-prescribed';
import { Medicine } from './medicine'
import { Labtest } from './labtest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicinePrescribedService {

  medicinePrescribed: MedicinePrescribed[];

  medicines: Medicine[];
  formData: MedicinePrescribed = new MedicinePrescribed();
  tests: Labtest[];

  constructor(private httpClient: HttpClient) { }

  getAllConsultationMedicine(){
    this.httpClient.get(environment.apiUrl+'/api/medpres')
    .toPromise().then(response =>
      this.medicinePrescribed= response as MedicinePrescribed[]);
  }

  // insert consultation medicine
  insertConsultationMedicine(conmed: MedicinePrescribed): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/medpres/',conmed);
  }

  // update consultation medicine
  updateConsultationMedicine(conmed: MedicinePrescribed): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/medpres/',conmed);
  }

  // Get medicines from dropdownList
  // get all medicines or Method for Binding all medicines
  getAllMedicines(){
    this.httpClient.get(environment.apiUrl+'/api/medicines')
      .toPromise().then(response =>
        this.medicines= response as Medicine[]);
  }



}
