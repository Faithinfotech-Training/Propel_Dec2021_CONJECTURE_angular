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
import { MedicinesPrescribedComponent } from './medicines-prescribed/medicines-prescribed.component';
import { MedicinePrescribedComponent } from './medicines-prescribed/medicine-prescribed/medicine-prescribed.component';
import { MedicinePrescribedListComponent } from './medicines-prescribed/medicine-prescribed-list/medicine-prescribed-list.component';
import { LabTestsPrescribedComponent } from './lab-tests-prescribed/lab-tests-prescribed.component';
import { LabTestPrescribedComponent } from './lab-tests-prescribed/lab-test-prescribed/lab-test-prescribed.component';
import { LabTestPrescribedListComponent } from './lab-tests-prescribed/lab-test-prescribed-list/lab-test-prescribed-list.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { MedicineComponent } from './medicines/medicine/medicine.component';
import { MedicineListComponent } from './medicines/medicine-list/medicine-list.component';
import { EditmedicineComponent } from './medicines/editmedicine/editmedicine.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { HeaderComponent } from './header/header.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffsComponent } from './staffs/staffs.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedcinprescribComponent } from './medcinprescrib/medcinprescrib.component';
import { MedpresComponent } from './medcinprescrib/medpres/medpres.component';
import { MedpresListComponent } from './medcinprescrib/medpres-list/medpres-list.component';
import { TestprescribComponent } from './testprescrib/testprescrib.component';
import { TestpresComponent } from './testprescrib/testpres/testpres.component';
import { TestpresListComponent } from './testprescrib/testpres-list/testpres-list.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { LabtestComponent } from './labtests/labtest/labtest.component';
import { EditlabtestComponent } from './labtests/editlabtest/editlabtest.component';
import { LabtestListComponent } from './labtests/labtest-list/labtest-list.component';
import { ReceptionistsComponent } from './receptionists/receptionists.component';



@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AppointmentComponent,
    AppointmentListComponent,
    MedcinprescribComponent,
    MedpresComponent,
    MedpresListComponent,
    ConsultationsComponent,
    ConsultationComponent,
    ConsultationListComponent,
    MedicinesPrescribedComponent,
    MedicinePrescribedComponent,
    MedicinePrescribedListComponent,
    LabTestsPrescribedComponent,
    LabTestPrescribedComponent,
    LabTestPrescribedListComponent,
    TestprescribComponent,
    TestpresComponent,
    TestpresListComponent,
    NotesComponent,
    NoteComponent,
    NoteListComponent,
    MedicinesComponent,
    MedicineComponent,
    MedicineListComponent,
    EditmedicineComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    StaffsComponent,
    StaffListComponent,
    StaffComponent,
    PatientComponent,
    DoctorsComponent,
    LabtestsComponent,
    LabtestComponent,
    EditlabtestComponent,
    LabtestListComponent,
    ReceptionistsComponent
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
