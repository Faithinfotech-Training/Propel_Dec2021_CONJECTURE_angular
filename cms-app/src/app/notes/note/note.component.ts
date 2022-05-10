import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(public noteService: NoteService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
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
        this.toastr.success("Inserted Records Successfully")
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
