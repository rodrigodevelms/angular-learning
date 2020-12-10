import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Select} from "../../../../../commons/model/select";
import * as moment from "moment/moment";


@Component({
  selector: 'app-employee-personal',
  templateUrl: './employee-personal.component.html',
  styleUrls: ['./employee-personal.component.css']
})
export class EmployeePersonalComponent implements OnInit {

  // VARIABLES *****************************************************************

  @Input() employeePersonalForm: FormGroup;

  CELLPHONE = '( 00 ) 0 0000 - 0000';
  LANDLINE = '( 00 ) 0000 - 0000';
  phoneMask = this.LANDLINE;
  phoneNumber = '';
  previousLength = 0;

  genders: Select[] = [
    {
      value: 'NotInformed',
      name: "Não informado"
    },
    {
      value: 'Male',
      name: "Masculino"
    },
    {
      value: 'Female',
      name: "Feminino"
    },
    {
      value: 'Other',
      name: "Outro"
    }
  ]

  maritalStatus: Select[] = [
    {
      value: 'NotInformed',
      name: "Não informado"
    },
    {
      value: 'Single',
      name: "Solteiro"
    },
    {
      value: 'Married',
      name: "Casado"
    },
    {
      value: 'Divorced',
      name: "Divorciado"
    },
    {
      value: 'Widower',
      name: "Viúvo"
    },
    {
      value: 'StableUnion',
      name: "União Estável"
    }
  ];

  companyTypes: Select[] = [
    {
      value: 'Parent',
      name: "Matriz"
    },
    {
      value: 'Subsidiary',
      name: "Filial"
    },
  ];

  lineBusiness: Select[] = [
    {
      value: 'Footwear',
      name: "Calçados"
    },
    {
      value: 'Clothing',
      name: "Vestuário"
    },
    {
      value: "Medicines",
      name: "Medicamentos"
    },
    {
      value: "Marketplace",
      name: "Mercado em Geral"
    },
    {
      value: "Other",
      name: "Outros"
    }
  ];

  // FUNCTIONS *****************************************************************


  constructor() {
  }

  ngOnInit(): void {
  }

  fun_phoneMask() {
    if (this.phoneNumber.length <= 10 && this.phoneMask === this.CELLPHONE) {
      this.phoneMask = this.LANDLINE;
    } else if (this.phoneNumber.length === 10 && this.phoneMask === this.LANDLINE && this.previousLength === 10) {
      this.phoneMask = this.CELLPHONE;
    }

    this.previousLength = this.phoneNumber.length;
  }

  fun_isPhysicalPerson(value: string): boolean {
    if (this.employeePersonalForm.get('document').value.length <= 11) {
      this.employeePersonalForm.get(value).enable();
      return true
    } else {
      this.employeePersonalForm.get(value).disable();
      return false
    }
  }

  fun_isLegalPerson(value: string): boolean {
    if (this.employeePersonalForm.get('document').value.length > 11) {
      this.employeePersonalForm.get(value).enable();
      return true
    } else {
      this.employeePersonalForm.get(value).disable();
      return false;
    }
  }

  fun_validateDate(year: number): Date {
    let todayDate: Date = new Date();
    return moment(todayDate).subtract(year, 'year').toDate();
  }

}
