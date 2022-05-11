import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {

  constructor(public medicineService: MedicineService) { }

  ngOnInit(): void {
    this.medicineService.getAllMedicines();
  }

}
