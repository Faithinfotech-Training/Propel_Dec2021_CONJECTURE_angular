import { Component, OnInit } from '@angular/core';
import { MedicinePrescribedService } from 'src/app/shared/medicine-prescribed.service';

@Component({
  selector: 'app-medicine-prescribed-list',
  templateUrl: './medicine-prescribed-list.component.html',
  styleUrls: ['./medicine-prescribed-list.component.scss']
})
export class MedicinePrescribedListComponent implements OnInit {

  filter: string;

  constructor(public medicinePrescribedService: MedicinePrescribedService) { }

  ngOnInit(): void {
    this.medicinePrescribedService.getAllConsultationMedicine();
  }

}
