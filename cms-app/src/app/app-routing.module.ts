import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { ConsultationComponent } from './consultations/consultation/consultation.component';
import { TestpageComponent } from './testpage/testpage.component';

const routes: Routes = [
  { path: 'conPatient/:appID', component: ConsultationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
