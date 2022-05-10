import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LabTestPrescribedService } from 'src/app/shared/lab-test-prescribed.service';

@Component({
  selector: 'app-lab-test-prescribed',
  templateUrl: './lab-test-prescribed.component.html',
  styleUrls: ['./lab-test-prescribed.component.scss']
})
export class LabTestPrescribedComponent implements OnInit {

  constructor(public labTestPrescribedService: LabTestPrescribedService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.labTestPrescribedService.getAllTests();
  }

  //submit Tests
  onSubmitTest(form: NgForm){
    console.log(form.value);

    let addId=this.labTestPrescribedService.formData.testID;

    //insert
    if(addId==0 || addId==null){

      //Insert
      this.insertTestRecord(form);
    }else{

      //update
      this.updateTestRecord(form);
    }
  }

  insertTestRecord(form: NgForm){
    console.log("Inserting  Medicine records")
    this.labTestPrescribedService.insertConsultationTest(form.value).subscribe(
      result=>{
        console.log(result);
        this.toastr.success("Inserted Records Successfully")
        this.resetForm(form);
      }
    );
    // window.location.reload();
  }

  //Update
  updateTestRecord(form: NgForm){
    console.log("Updating")
    this.labTestPrescribedService.updateConsultationTest(form.value).subscribe(
      result=>{
        console.log(result)
        this.toastr.success("Updated Records Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

    //reset Form
    resetForm(form:NgForm){
      if(form != null){
        form.resetForm();
      }
    }

}
