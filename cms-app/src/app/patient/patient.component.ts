
import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import {PatientService} from 'src/app/shared/patient.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  filter: string;
  page: number=1;
  Entry_View:boolean=true;

  constructor(private patientService:PatientService,private router: Router) { }

 
  ngOnInit(): void {
    this.patientService.getPatients();
  }
  createNew()
  {
    this.Entry_View=false;
  }
  
    //reset form
    resetForm(form:NgForm){
      if(form !=null){
        form.resetForm();
      }
    }

  //Submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    let addId=this.patientService.formData.patientID;
    //insert or update check condition
    if(addId == 0 || addId==null){
      this.insertRecord(form);
    }else{
      //Update
    this.updateRecord(form);
    }
  }

  //Insert method
  insertRecord(form:NgForm){
    console.log("Inserting");
    this.patientService.insertPatient(form.value).subscribe(
      result =>{
        console.log(result);
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

  //update methd
  updateRecord(form:NgForm){
    console.log("updating");
      this.patientService.updatePatient(form.value).subscribe(
        result =>{
          console.log(result);
          this.resetForm(form);
        }
      );
      window.location.reload();
  }

  edit(pat:Patient){

    this.patientService.formData=Object.assign({},pat)
    this.Entry_View=false;
  }
  delete(patid:number)
{
  if(confirm("Are you sure you want to delete")){
    this.patientService.deletepatient(patid).subscribe(response=>{

    },
    error=>
    {

    }
    )
  }
}

}
