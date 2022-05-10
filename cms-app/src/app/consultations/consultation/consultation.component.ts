import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConsultationService } from 'src/app/shared/consultation.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  constructor(public consultationService: ConsultationService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.consultationService.getAllMedicines();
    this.consultationService.getAllTests();
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

    let addId=this.consultationService.formData.consultationID;

    //insert
    if(addId==0 || addId==null){
      
      //Insert
      this.insertRecord(form);
    }else{
      
      //update
      this.updateRecord(form);
    }
  }

  //submit Medicines
  onSubmitMed(form: NgForm){
    console.log(form.value);

    let addId=this.consultationService.formData.consultationID;

    //insert
    if(addId==0 || addId==null){

      //Insert
      this.insertMedRecord(form);
    }else{

      //update
      this.updateMedRecord(form);
    }
  }

  //submit Tests
  onSubmitTest(form: NgForm){}

  //submit Tests
  onSubmitNote(form: NgForm){}

  //Insert
  insertRecord(form: NgForm){
    console.log("Inserting records")
    this.consultationService.insertConsultation(form.value).subscribe(
      result=>{
        console.log(result);
        this.toastr.success("Inserted Records Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

  insertMedRecord(form: NgForm){
    console.log("Inserting  Medicine records")
    this.consultationService.insertConsultationMedicine(form.value).subscribe(
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
    this.consultationService.updateConsultation(form.value).subscribe(
      result=>{
        console.log(result)
        this.toastr.success("Updated Records Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

   //Update
   updateMedRecord(form: NgForm){
    console.log("Updating")
    this.consultationService.updateConsultationMedicine(form.value).subscribe(
      result=>{
        console.log(result)
        this.toastr.success("Updated Records Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }
}
