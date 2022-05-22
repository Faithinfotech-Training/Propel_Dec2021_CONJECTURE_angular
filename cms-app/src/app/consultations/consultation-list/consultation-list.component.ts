import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from 'src/app/shared/consultation.service';

@Component({
  selector: 'app-consultation-list',
  templateUrl: './consultation-list.component.html',
  styleUrls: ['./consultation-list.component.scss']
})
export class ConsultationListComponent implements OnInit {

  //declare for search
  filter: string;

  constructor(public consultationService: ConsultationService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.consultationService.getAllConsultations();
  }

  medlist_click(id:number){
    this.router.navigate(['sinpatlist',id]);
  }

  test_click(id:number){
    this.router.navigate(['sinpattest',id]);
  }

}
