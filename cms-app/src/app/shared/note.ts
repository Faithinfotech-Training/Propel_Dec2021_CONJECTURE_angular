import { Appointment } from "./appointment";

export class Note {

    notesID: number=0;
    appointmentID: number=0;
    appointment: Appointment[];
    consultationID: number=0;
    notes: string='';
}
