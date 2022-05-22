import { Appointment } from "./appointment";
import { Labtest } from "./labtest";

export class LabTestPrescribed {

    labPresID: number=0;
    testID: number=0;
    appointmentID: number=0;
    appointment: Appointment[];
    consultationID: number=0;
    labtest: Labtest[];
}
