import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MedicineprescribService} from 'src/app/shared/medicineprescrib.service';

@Component({
  selector: 'app-medpres-list',
  templateUrl: './medpres-list.component.html',
  styleUrls: ['./medpres-list.component.scss']
})
export class MedpresListComponent implements OnInit {
  id: number;
  appoinId: number;

  constructor(public medprescrSer:MedicineprescribService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.appoinId=this.route.snapshot.params['id']
    console.log("in med-pres component  "+this.appoinId)
    this.medprescrSer.getAllAppointments(this.appoinId);
  }

  list_click(id:number){
    this.router.navigate(['list',id]);

  }
}
