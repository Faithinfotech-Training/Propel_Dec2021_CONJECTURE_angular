import { Patient } from "./patient";
export class Appointment {

    appointmentID: number=0;
    tokenNumber: string='';
    dateOfAppointment: Date = new Date;
    createdOn: Date = new Date;
    active: boolean=false;
    patient: Patient[];
}
