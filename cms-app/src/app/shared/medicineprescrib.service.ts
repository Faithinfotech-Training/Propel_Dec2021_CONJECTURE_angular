import { Injectable } from '@angular/core';
import {Medicineprescrib} from './medicineprescrib';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineprescribService {
  //declare global variable
  medicinepres:Medicineprescrib[]

  constructor(private httpClient:HttpClient) { }

  //get all appointment detials
  getAllAppointments(appoinId:number){
    this.httpClient.get(environment.apiUrl+'/api/medpres/dto/'+appoinId)
    .toPromise().then(response=> this.medicinepres= response as Medicineprescrib[] );
    
}
}