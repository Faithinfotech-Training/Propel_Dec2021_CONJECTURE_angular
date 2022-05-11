import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  //declare for seacrh
  filter: string;

  constructor(public appointmentService: AppointmentService,
    private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.getAllAppointments();

  }

  consultPatient(appID: number){
    console.log("in appointment list component "+appID);
    this.router.navigate(['conPatient',appID])
  }

}
