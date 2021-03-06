import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  pID: number;

  constructor(public appointmentService: AppointmentService,
    private toastr: ToastrService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.pID=this.route.snapshot.params['pID'];
    console.log("in app comp")
    console.log("in appointment component id "+this.pID);

    this.appointmentService.getAllDoctors();
    this.appointmentService.getAllPatients();

  }

  //reset Form
  resetForm(form:NgForm){
    if(form != null){
      form.resetForm();
    }
  }

  //Submit Form
  onSubmit(form: NgForm){
    console.log(form.value);

    let addId=this.appointmentService.formData.appointmentID;

    //insert
    if(addId==0 || addId==null){
      
      //Insert
      this.insertRecord(form);
    }else{
      
      //update
      this.updateRecord(form);
    }
  }

  //Insert
  insertRecord(form: NgForm){
    console.log("Inserting records")
    this.appointmentService.insertAppointment(form.value).subscribe(
      result=>{
        console.log(result);
        this.toastr.success("Inserted Records Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

  //Update
  updateRecord(form: NgForm){
    console.log("Updating")
    this.appointmentService.updateAppointment(form.value).subscribe(
      result=>{
        console.log(result)
        this.toastr.success("Updated Records Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

}
