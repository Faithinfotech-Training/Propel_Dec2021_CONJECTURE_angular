import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { ConsultationComponent } from './consultations/consultation/consultation.component';
import { MedicinePrescribedComponent } from './medicines-prescribed/medicine-prescribed/medicine-prescribed.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './shared/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staffs/staff/staff.component';
import { StaffListComponent } from './staffs/staff-list/staff-list.component';
import { PatientComponent } from './patient/patient.component';
import { Doctor } from './shared/doctor';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';
import { ConsultationListComponent } from './consultations/consultation-list/consultation-list.component';
import { MedicinePrescribedListComponent } from './medicines-prescribed/medicine-prescribed-list/medicine-prescribed-list.component';
import { LabTestPrescribedListComponent } from './lab-tests-prescribed/lab-test-prescribed-list/lab-test-prescribed-list.component';
import { MedpresListComponent } from './medcinprescrib/medpres-list/medpres-list.component';
import { TestpresListComponent } from './testprescrib/testpres-list/testpres-list.component';
import { LabtestListComponent } from './labtests/labtest-list/labtest-list.component';
import { LabtestComponent } from './labtests/labtest/labtest.component';
import { LabtestsComponent } from './labtests/labtests.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ReceptionistsComponent } from './receptionists/receptionists.component';


const routes: Routes = [
  { path:'conPatient/:appID', component: ConsultationComponent },
  { path:'',component: LoginComponent},
  { path:'login',component: LoginComponent},
  { path:'admin', component: AdminComponent, canActivate:[AuthGuard],data:{role:'1'}},
  { path:'doctor', component: DoctorsComponent,  canActivate:[AuthGuard],data:{role:'5'}},
  { path:'sta', component: StaffComponent},
  { path:'stalist', component: StaffListComponent },
  { path:'patient',component:PatientComponent},
  { path:'reception', component: ReceptionistsComponent},
  { path:'appoint', component: AppointmentsComponent},
  { path:'appointmentList', component: AppointmentListComponent},
  { path:'consultationList', component: ConsultationListComponent},
  { path:'consultation', component: ConsultationsComponent},
  { path:'appointments', component: AppointmentsComponent},
  { path:'medPresList', component: MedicinePrescribedListComponent},
  { path:'labTestList', component: LabTestPrescribedListComponent},
  { path:'sinpattest/:id',component:TestpresListComponent},
  { path:'sinpatlist/:id',component:MedpresListComponent},
  { path:'lab' , component:LabtestComponent},
  { path:'labtests' , component:LabtestsComponent},
  { path:'labtest-list' , component:LabtestListComponent},
  { path:'labtechh', component:LabtestsComponent},
  { path:'pharmaa', component: MedicinesComponent},
  { path:'labtech', component:LabtestsComponent, canActivate:[AuthGuard],data:{role:'4'}},
  { path:'pharma', component: MedicinesComponent, canActivate:[AuthGuard],data:{role:'3'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
