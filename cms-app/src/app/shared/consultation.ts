import { Patient } from "./patient";
import { Appointment } from "./appointment";
import { Doctor } from "./doctor";
import { MedicinePrescribed } from "./medicine-prescribed"
import { LabTestPrescribed } from "./lab-test-prescribed"

export class Consultation {

    consultationID: number=0;
    appointmentID: number=0;
    medicinePrescribed: MedicinePrescribed[];
    labTestPrescribed: LabTestPrescribed[];
    dateOfAppointment: Date = new Date;
    diagonosis: string='';
    patient: Patient[];
    appointment: Appointment[];
    doctor: Doctor[];
}
