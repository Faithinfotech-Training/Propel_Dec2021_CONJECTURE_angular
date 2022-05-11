import { Injectable } from '@angular/core';
import { Medicine } from './medicine'
import { Labtest } from './labtest';
import { MedicinePrescribed } from './medicine-prescribed';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  medicinePrescribed: MedicinePrescribed[];

  medicines: Medicine[];
  formData: Medicine = new Medicine();
  tests: Labtest[];

  constructor(private httpClient: HttpClient) { }

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

  //get a particular medicine

  //insert medicine
  insertMedicine(medicine: Medicine): Observable <any>{
    return this.httpClient.post(environment.apiUrl+ '/api/medicines/' ,medicine);
  }

  //update medicine
  updateMedicine(medicine: Medicine): Observable <any>{
    return this.httpClient.put(environment.apiUrl +'/api/medicines/' , medicine);
  }

  

}
