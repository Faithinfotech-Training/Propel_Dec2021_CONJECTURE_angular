import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultationService } from 'src/app/shared/consultation.service';
import { LabTestPrescribedService } from 'src/app/shared/lab-test-prescribed.service';
import { MedicinePrescribedService } from 'src/app/shared/medicine-prescribed.service';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  appID: number;

  constructor(public consultationService: ConsultationService,
    public labTestPrescribedService: LabTestPrescribedService,
    public medicinePrescribedService: MedicinePrescribedService,
    public noteService: NoteService,
    private toastr: ToastrService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.appID=this.route.snapshot.params['appID'];
    console.log("in app comp")
    console.log("in appointment component id "+this.appID);

    this.consultationService.formData.appointmentID=this.appID;
    this.noteService.formData.appointmentID=this.appID;
    this.labTestPrescribedService.formData.appointmentID=this.appID;
    this.medicinePrescribedService.formData.appointmentID=this.appID;

    this.consultationService.getAllMedicines();
    this.consultationService.getAllTests();
    this.medicinePrescribedService.getAllMedicines();
    this.labTestPrescribedService.getAllTests();
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
        this.toastr.success("Inserted Medicine Successfully")
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
        this.toastr.success("Updated Medicines Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
  }


  //submit Tests
  onSubmitNote(form: NgForm){
    console.log(form.value);

    let addId=this.noteService.formData.notesID;

    //insert
    if(addId==0 || addId==null){

      //Insert
      this.insertNote(form);
    }else{

      //update
      this.updateNote(form);
    }
  }

  insertNote(form: NgForm){
    console.log("Inserting  Medicine records")
    this.noteService.insertConsultationNote(form.value).subscribe(
      result=>{
        console.log(result);
        this.toastr.success("Inserted Notes Successfully")
        this.resetForm(form);
      }
    );
    // window.location.reload();
  }

  //Update
  updateNote(form: NgForm){
    console.log("Updating")
    this.noteService.updateConsultationNote(form.value).subscribe(
      result=>{
        console.log(result)
        this.toastr.success("Updated Notes Successfully")
        this.resetForm(form);
      }
    );
    window.location.reload();
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
  console.log("Inserting  test records")
  this.labTestPrescribedService.insertConsultationTest(form.value).subscribe(
    result=>{
      console.log(result);
      this.toastr.success("Inserted Test Successfully")
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
      this.toastr.success("Updated Test Successfully")
      this.resetForm(form);
    }
  );
  window.location.reload();
}

}
