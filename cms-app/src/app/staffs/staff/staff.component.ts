import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(public staffService: StaffService) { }

  ngOnInit(): void {
  }


  //reset form
  resetForm(form: NgForm){
    if(form !=null){
      form.resetForm();
    }
  }

   //Submit Form
   onSubmit(form: NgForm){
    console.log(form.value);
    let addId=this.staffService.formData.staffID;

    //insert or uPdate
    if(addId==0 || addId==null){
    this.insertRecord(form);
  }
  else {
    //update
    this.updateRecord(form);

  }
}

  //Insert
  insertRecord(form: NgForm){
    console.log("Inserting")
    this.staffService.insertStaff(form.value).subscribe(
      result=>{
        console.log(result);
        this.resetForm(form);
        //this.toastr.success("Inserted Successfully", "HRApp v2022")

      }
    );
    window.location.reload();
  }
  //Update Method
  updateRecord(form: NgForm){
    console.log("Updating")
    this.staffService.updateStaff(form.value).subscribe(
      result=>{
        console.log(result);
        this.resetForm(form);
        //this.toastr.success("Updated Successfully", "HRApp v2022")
      }
    );
    window.location.reload();
  }

}


