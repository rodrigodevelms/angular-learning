import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmploymentBond} from "./models/employment-bond";
import {WorkTime} from "./models/work-time";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-professional',
  templateUrl: './employee-professional.component.html',
  styleUrls: ['./employee-professional.component.css']
})
export class EmployeeProfessionalComponent implements OnInit {

  // VARIABLES ******************************************************

  @Input() employeeProfessionalForm: FormGroup;
  @Input() physicalPerson: boolean;
  @Input() legalPerson: boolean;

  @Output() vtEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() vrEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

  transportVoucher: boolean = false;
  foodVoucher: boolean = false;
  bonds: EmploymentBond[] = [
    {
      value: 'clt',
      name: "CLT"
    },
    {
      value: 'contract',
      name: "Contrato"
    }
  ]

  workTime: WorkTime[] = [
    {
      value: 'daytime',
      name: "Diurno"
    },
    {
      value: 'nocturnal',
      name: "Noturno"
    }
  ];

  // FUNCTIONS ******************************************************

  constructor() {
  }

  ngOnInit(): void {
  }

  fun_transportationVoucherStatus() {
    this.vtEmitter.emit(this.transportVoucher);
  }

  fun_foodVoucherStatus() {
    this.vrEmitter.emit(this.foodVoucher);
  }

  fun_isPhysicalPerson(value: string): boolean {
    if (this.physicalPerson) {
      this.employeeProfessionalForm.get(value).enable();
      return true
    } else {
      this.employeeProfessionalForm.get(value).disable();
      return false
    }
  }

  fun_isLegalPerson(value: string): boolean {
    if (this.legalPerson) {
      this.employeeProfessionalForm.get(value).enable();
      return true
    } else {
      this.employeeProfessionalForm.get(value).disable();
      return false;
    }
  }
}
