import { Doctor } from "./doctor";
import { Patient } from "./patient";


export class Appointment {

    appointmentID: number=0;
    tokenNumber: string='';
    doctorID: string='';
    patientID: string='';
    dateOfAppointment: Date = new Date;
    doctor: Doctor[];
    patient: Patient[];
}
