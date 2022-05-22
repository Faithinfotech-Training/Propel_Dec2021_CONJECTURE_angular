import { Component, OnInit } from '@angular/core';
import { Labtest } from 'src/app/shared/labtest';
import { LabtestService } from 'src/app/shared/labtest.service';

@Component({
  selector: 'app-labtest-list',
  templateUrl: './labtest-list.component.html',
  styleUrls: ['./labtest-list.component.scss']
})
export class LabtestListComponent implements OnInit {

  //declare
  filter: String;

  constructor(public labtestService: LabtestService) { }

  ngOnInit(): void {

    //life cycle hook
    this.labtestService.getAllLabtests();
  }

  //populate labtest record
  populateLabtestForm(lab : Labtest){

     this.labtestService.formData = Object.assign({},lab)

  }

  //deleteEmployee
  deleteLabtest(id : number){
    if(confirm('areyou sure want to delete this record')){
      this.labtestService.deleteLabtest(id)
      .subscribe(respoonse=>{
        this.labtestService.getAllLabtests();
      },
      error=>{
        console.log(error);
      })
    }
  }

  //updateLABTEST
  updateLabtest(labId: number){
    console.log(labId);
   
  }

 
  


}
