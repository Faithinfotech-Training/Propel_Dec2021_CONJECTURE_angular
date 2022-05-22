
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { User} from '../shared/user'
import{ AuthService } from '../shared/auth.service'
import { Router } from '@angular/router';
import { User } from '../shared/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare varaibles
  loginForm: FormGroup;
  isSubmitted=false;
  error:string=''

  loginUser: User =new User;
  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    //create a reactive form
    this.loginForm=this.formBuilder.group({
      //formControl Name

      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]

    });
  }

  //get all controls for validation
  get formControls(){
    return this.loginForm.controls;
  }
  //check credentials
  loginCredentials(){
    console.log(this.loginForm.value);
    this.isSubmitted =true;
    //form is invalid
    if(this,this.loginForm.invalid){
      this.error="Sorry! Invalid entry. Try again";
      return;
    }
    //form is valid 
    if(this.loginForm.valid){
      //call webservice
      this.authService.loginVerify(this.loginForm.value)
      .subscribe(
        response=>{
          console.log(response);
          
          sessionStorage.setItem('USERNAME',response.userName);
          sessionStorage.setItem('ACCESS_ROLE',response.role.roleID.toString());
         
          if(response==null){
            this.error="Invalid user name and/or password";
          }
          //check the role and redirect to the respective component
          else if(response.role.roleID===1){
            this.router.navigateByUrl('/admin')
            console.log("Administrator");
          }else if(response.role.roleID===2){
            this.router.navigateByUrl('/reception')
            console.log("reception");
          }else if(response.role.roleID===3){
            this.router.navigateByUrl('/pharma')
            console.log("Pharmacist");
          }else if(response.role.roleID===4){
            this.router.navigateByUrl('/labtech')
            console.log("Lab tech");
          }else if(response.role.roleID===5){  
            this.router.navigateByUrl('/doctor')
            console.log("Doctor");
          }else{
            this.error="Sorry...You are Not Allowed to Access this system"
          }
          
        },
        error=>{
          console.log(error);
          this.error='Invalid Username and /or password!';
        }
      )
    }
  }

}