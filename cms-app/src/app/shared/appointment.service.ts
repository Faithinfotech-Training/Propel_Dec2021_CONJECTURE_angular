import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

   //declare variables
   appointments: Appointment[];
   formData: Appointment = new Appointment();

  constructor(private httpClient: HttpClient) { }

    // get all employees or Method for Binding all employees
    getAllAppointments(){
      this.httpClient.get(environment.apiUrl+'/api/appointments')
        .toPromise().then(response =>
          this.appointments= response as Appointment[]);
    }
}
