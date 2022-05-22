import {Role} from  './role';
import {User} from  './user';
export class Staff {

    staffID: number=0; 
    staffNo:  number=0;
    fullName: string='';
    email: string='';
    dateOfBirth: Date=new Date;
    phoneNumber: string='';
    address: string='';
    dateOfJoin: Date=new Date;
    salary: number=0;
    user: User[];
    userName: string='';
    role: Role[];
    roleName: string='';
    active: boolean=true;
}
