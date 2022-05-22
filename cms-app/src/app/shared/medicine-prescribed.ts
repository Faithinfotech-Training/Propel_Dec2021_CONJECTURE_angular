import { Appointment } from "./appointment";
import { Medicine } from "./medicine";
export class MedicinePrescribed {

    medPresID: number=0;
    medicineID: number=0;
    medicine: Medicine[];
    appointmentID: number=0;
    appointment: Appointment[];
    consultationID: number=0;
    medinterval: string='';
    dosage: string='';
    interval: string='';
}
