import { Injectable } from '@angular/core';
import {Labtest} from './labtest';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabtestService {
//declare variables
labtests: Labtest[];
formData : Labtest= new Labtest();

constructor(private httpClient : HttpClient) { }

//get all labtest
getAllLabtests(){
  this.httpClient.get(environment.apiUrl+'/api/labtests')
  .toPromise().then(response =>
    this.labtests=response as Labtest[])
}

//get a particular lab test

//insert labtest
insertLabtest(lab: Labtest): Observable <any>{
  return this.httpClient.post(environment.apiUrl+ '/api/labtests/' ,lab);
}

//update labtest
updateLabtest(lab: Labtest): Observable <any>{
  return this.httpClient.put(environment.apiUrl +'/api/labtests/' , lab);
}

//delete labtest
deleteLabtest(labId: number) : Observable <any>{
  return this.httpClient.delete(environment.apiUrl+ '/api/labtests/' + labId);
}

}
