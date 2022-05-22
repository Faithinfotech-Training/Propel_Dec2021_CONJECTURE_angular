import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {TestpresctibService} from 'src/app/shared/testpresctib.service';

@Component({
  selector: 'app-testpres-list',
  templateUrl: './testpres-list.component.html',
  styleUrls: ['./testpres-list.component.scss']
})
export class TestpresListComponent implements OnInit {
  id: number;
  appoinId: number;

  constructor(public testPresSer:TestpresctibService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.appoinId=this.route.snapshot.params['id']
    console.log("Inside test pres id  "+this.appoinId);
    
    this.testPresSer.getAllTestPre(this.appoinId);
  }
  test_click(id:number){
    this.router.navigate(['test',id])
  }
  

}
