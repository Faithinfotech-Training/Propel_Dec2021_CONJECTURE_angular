import { Component, OnInit } from '@angular/core';
import { ConsultationService } from 'src/app/shared/consultation.service';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.scss']
})
export class ConsultationListComponent implements OnInit {

  //declare for search
  filter: string;

  constructor(public consultationService: ConsultationService) { }

  ngOnInit(): void {

    this.consultationService.getAllConsultations();
  }

}
