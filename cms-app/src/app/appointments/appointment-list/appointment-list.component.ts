import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  //declare for seacrh
  filter: string;

  constructor(public appointmentService: AppointmentService) { }

  ngOnInit(): void {

    this.appointmentService.getAllAppointments();

  }

}
