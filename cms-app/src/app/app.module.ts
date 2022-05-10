import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ConsultationComponent } from './consultations/consultation/consultation.component';
import { ConsultationListComponent } from './consultations/consultation-list/consultation-list.component';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    ConsultationsComponent,
    ConsultationComponent,
    ConsultationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:15000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
