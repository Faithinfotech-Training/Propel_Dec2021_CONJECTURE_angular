import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient } from '@angular/common/http';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import { Patient } from './patient';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

   //declare variables
   appointments: Appointment[];
   formData: Appointment = new Appointment();

   doctors: Doctor[];
   patients: Patient[];

  constructor(private httpClient: HttpClient) { }

    // get all appointments or Method for Binding all appointments
    getAllAppointments(){
      this.httpClient.get(environment.apiUrl+'/api/appointments')
        .toPromise().then(response =>
          this.appointments= response as Appointment[]);
    }

  // get a particular appointment
  getAppointment(appId: number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/appointments/'+appId);
  }

  // insert appointment
  insertAppointment(app: Appointment): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/appointments/',app);
  }

  // update appointment
  updateAppointment(app: Appointment): Observable<any> {
    return this.httpClient.put(environment.apiUrl+'/api/appointments/',app);
  }

  // delete appointment
  deleteAppointment(appId: number): Observable<any>{
    return this.httpClient.delete(environment.apiUrl+'/api/appointments/'+appId);
  }

  // Get doctors from dropdownList
  // get all doctors or Method for Binding all doctors
  getAllDoctors(){
    this.httpClient.get(environment.apiUrl+'/api/doctors')
      .toPromise().then(response =>
        this.doctors= response as Doctor[]);
  }

  // Get doctors from dropdownList
  // get all doctors or Method for Binding all doctors
  getAllPatients(){
    this.httpClient.get(environment.apiUrl+'/api/patients')
      .toPromise().then(response =>
        this.patients= response as Patient[]);
  }

}
