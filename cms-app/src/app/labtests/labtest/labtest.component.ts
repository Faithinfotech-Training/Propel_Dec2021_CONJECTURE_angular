import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LabtestService} from 'src/app/shared/labtest.service'

@Component({
  selector: 'app-labtest',
  templateUrl: './labtest.component.html',
  styleUrls: ['./labtest.component.scss']
})
export class LabtestComponent implements OnInit {

  constructor(public labtestService: LabtestService) { }

  ngOnInit(): void {
    this.labtestService.getAllLabtests();
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
    let addId= this.labtestService.formData.testID;
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
  this.labtestService.insertLabtest(form.value).subscribe(
    result =>{
      console.log(result);

    }
  );
  window.location.reload();
}
//update method
updateRecord(form:NgForm){
  console.log("updating");
  this.labtestService.updateLabtest(form.value).subscribe(
    result=>{
      console.log(result);
    }
  );
  window.location.reload();
}
}
