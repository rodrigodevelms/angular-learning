import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Select} from "../../../../../commons/model/select";
import {MaskValidationService} from "../../../../../commons/validations/mask-validation.service";

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
  bonds: Select[] = [
    {
      value: 'CLT',
      name: "CLT"
    },
    {
      value: 'Contract',
      name: "Contrato"
    }
  ]

  workTime: Select[] = [
    {
      value: 'Daytime',
      name: "Diurno"
    },
    {
      value: 'Nocturnal',
      name: "Noturno"
    }
  ];

  hourMask = this.maskValidation.fun_hourMaskPattern();
  currencyMask = this.maskValidation.fun_currencyRealPattern();

  // FUNCTIONS ******************************************************

  constructor(
    private maskValidation:  MaskValidationService
  ) {
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

  fun_validateDate(): Date {
    return new Date();
  }
}
