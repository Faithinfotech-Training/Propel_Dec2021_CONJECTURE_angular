import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MedicinePrescribedService } from 'src/app/shared/medicine-prescribed.service';

@Component({
  selector: 'app-medicine-prescribed',
  templateUrl: './medicine-prescribed.component.html',
  styleUrls: ['./medicine-prescribed.component.scss']
})
export class MedicinePrescribedComponent implements OnInit {

  constructor(public medicinePrescribedService: MedicinePrescribedService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.medicinePrescribedService.getAllMedicines();
  }

  //submit Medicines
  onSubmitMed(form: NgForm){
    console.log(form.value);

    let addId=this.medicinePrescribedService.formData.consultationID;

    //insert
    if(addId==0 || addId==null){

      //Insert
      this.insertMedRecord(form);
    }else{

      //update
      this.updateMedRecord(form);
    }
  }


  insertMedRecord(form: NgForm){
    console.log("Inserting  Medicine records")
    this.medicinePrescribedService.insertConsultationMedicine(form.value).subscribe(
      result=>{
        console.log(result);
        this.toastr.success("Inserted Records Successfully")
        this.resetForm(form);
      }
    );
    // window.location.reload();
  }

  //Update
  updateMedRecord(form: NgForm){
    console.log("Updating")
    this.medicinePrescribedService.updateConsultationMedicine(form.value).subscribe(
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
