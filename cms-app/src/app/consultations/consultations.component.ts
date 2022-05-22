import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  id: number;

  constructor(private route:ActivatedRoute,
      private router:Router) { }

  ngOnInit(): void {
  }

  medlist_click(id:number){
    this.router.navigate(['sinpatlist',id]);
  }

  test_click(id:number){
    this.router.navigate(['sinpattest',id]);
  }

}
