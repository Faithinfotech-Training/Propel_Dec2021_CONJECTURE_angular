import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MedicineService} from 'src/app/shared/medicine.service'


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  
  constructor(public medicineService: MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getAllMedicines();
  }

  //resetForm
  resetForm(form: NgForm){
    if(form !=null){
      form.resetForm();
    }
  }

  //submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    let addId= this.medicineService.formData.medicineID;
    //insert or update check condition
    if(addId== 0|| addId==null){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }
//insert method
insertRecord(form:NgForm){
  console.log("inserting");
  this.medicineService.insertMedicine(form.value).subscribe(
    result =>{
      console.log(result);

    }
  );
  window.location.reload();
}
//update method
updateRecord(form:NgForm){
  console.log("updating");
  this.medicineService.updateMedicine(form.value).subscribe(
    result=>{
      console.log(result);
    }
  );
  window.location.reload();
}
}