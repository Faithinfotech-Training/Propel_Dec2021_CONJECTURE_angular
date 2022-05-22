import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/shared/doctor.service'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  id: number;
  consultCount: number=0;

  constructor(private route:ActivatedRoute,
      private router:Router,
      public doctorService: DoctorService) { }

  ngOnInit(): void {

// this.consultCount=this.doctorService.getConsultCount();
  this.getCount();
    this.id=this.route.snapshot.params['id'];
  }

  med_list(id:number){
    this.router.navigate(['medpreslist',id]);
  }

  getCount(){
    this.doctorService.getConsultCount().subscribe(
      data=>{
        console.log(data);
        this.consultCount=data;
      }
    );
  }

}
