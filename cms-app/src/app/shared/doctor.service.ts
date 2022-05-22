import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  conlength: number=0;

  constructor(private httpClient: HttpClient) { }

  getConsultCount(): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/consultations/length');
   
  }
}
