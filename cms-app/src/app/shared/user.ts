import {Role} from  './role';
export class User {
     userID: number =0;
     userName: string ='';
     password: string ='';
     active: boolean =true;
     role: Role;
     roleID: number =0;
}
