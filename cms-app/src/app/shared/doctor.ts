import { Staff } from "./staff";
import { Departments } from "./departments";
import { Specialization } from "./specialization";

export class Doctor {
    
    doctorID: number=0;
    staff: Staff[];
    departmentID: number=0;
    specializationID: number=0;
    departments: Departments[];
    specialization: Specialization[];
}
