import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Select} from "../../../../../commons/model/select";

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
      value: 'notInformed',
      name: "Não informado"
    },
    {
      value: 'male',
      name: "Masculino"
    },
    {
      value: 'female',
      name: "Feminino"
    },
    {
      value: 'other',
      name: "Outro"
    }
  ]

  maritalStatus: Select[] = [
    {
      value: 'notInformed',
      name: "Não informado"
    },
    {
      value: 'single',
      name: "Solteiro"
    },
    {
      value: 'married',
      name: "Casado"
    },
    {
      value: 'divorced',
      name: "Divorciado"
    },
    {
      value: 'widower',
      name: "Viúvo"
    },
    {
      value: 'stableUnion',
      name: "União Estável"
    }
  ];

  types: Select[] = [
    {
      value: 'parent',
      name: "Matriz"
    },
    {
      value: 'subsidiary',
      name: "Filial"
    },
  ];

  lineBusiness: Select[] = [
    {
      value: 'footwear',
      name: "Calçados"
    },
    {
      value: 'clothing',
      name: "Vestuário"
    },
    {
      value: "medicines",
      name: "Medicamentos"
    },
    {
      value: "marketplace",
      name: "Mercado em Geral"
    },
    {
      value: "other",
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

}
