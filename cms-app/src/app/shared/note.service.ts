import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  note: Note[];
  formData: Note = new Note();

  constructor(private httpClient: HttpClient) { }

  // insert consultation note
  insertConsultationNote(note: Note): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/notes/',note);
  }

  // update consultation note
  updateConsultationNote(note: Note): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/notes/',note);
  }

}
