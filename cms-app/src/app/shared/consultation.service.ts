import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consultation } from './consultation';
import { Observable } from 'rxjs';
import { Medicine } from './medicine'
import { Labtest } from './labtest';
import { MedicinePrescribed } from './medicine-prescribed';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  //declare variables
  consultation: Consultation[];
  formData: Consultation = new Consultation();

  medicinePrescribed: MedicinePrescribed[];

  medicines: Medicine[];
  //formData: Medicine = new Medicine();
  tests: Labtest[];

  constructor(private httpClient: HttpClient) { }

  getAllConsultations(){
    this.httpClient.get(environment.apiUrl+'/api/consultations')
    .toPromise().then(response =>
      this.consultation= response as Consultation[]);
  }

  // insert consultation
  insertConsultation(con: Consultation): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/consultation/',con);
  }

  // insert consultation medicine
  insertConsultationMedicine(conmed: MedicinePrescribed): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/medpres/',conmed);
  }

  // update consultation
  updateConsultation(con: Consultation): Observable<any> {
    return this.httpClient.put(environment.apiUrl+'/api/consultation/',con);
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

  // Get labtests from dropdownList
  // get all labtests or Method for Binding all labtests
  getAllTests(){
    this.httpClient.get(environment.apiUrl+'/api/labtests')
      .toPromise().then(response =>
        this.tests= response as Labtest[]);
  }
  
}
