import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Select} from "../../../../../commons/model/select";

@Component({
  selector: 'app-employee-access',
  templateUrl: './employee-access.component.html',
  styleUrls: ['./employee-access.component.css']
})
export class EmployeeAccessComponent implements OnInit {

  // VARIABLES ******************************************

  @Input() systemAccess: boolean;
  @Input() employeeAccessForm: FormGroup;

  @Output() accessEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  bodyDescription: string;
  access: boolean = false;

  accessesTypes: Select[] = [
    {
      value: "Owner",
      name: "Proprietário",
      description: `O Proprietário tem total acesso ao sistema. Podendo interagir em todas as áreas como:
      <br> área do contador: O proprietário pode ter acesso a todas as funionalidades que o <strong>contador</strong> possui.
      <br> área do administrador: O proprietário pode ter acesso a todas as funionalidades que o administrador possui.
      <br> área do operador: O proprietário pode ter acesso a todas as funionalidades que o operador possui.`
    },
    {
      value: "Administrator",
      name: "Administrador",
      description: `O Administrador tem poderes de cadastrar / remover funcionários, clientes e fornecedores.
      Também tem acesso ao balanço da empresa, metas, promoções, podendo  blá blá`
    },
    {
      value: "Operator",
      name: "Operador",
      description: `O Operador pode  bla bla.`
    },
    {
      value: "Accountant",
      name: "Contador",
      description: `O Contador pode bla bla.`
    }
  ]

  // FUNCTIONS ******************************************

  constructor() {
  }

  ngOnInit(): void {
  }

  fun_changeAccessRoleStatus() {
    this.accessEmitter.emit(this.access);
  }

}
