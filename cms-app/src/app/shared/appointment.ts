import { Doctor } from "./doctor";
import { Patient } from "./patient";


export class Appointment {

    appointmentID: number=0;
    tokenNumber: string='';
    doctorID: string='';
    patientID: string='';
    dateOfAppointment: Date = new Date;
    createdOn: Date = new Date;
    active: boolean=true;
    doctor: Doctor[];
    patient: Patient[];
}
