import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Select} from "../../../../../commons/model/select";

@Component({
  selector: 'app-employee-access',
  templateUrl: './employee-access.component.html',
  styleUrls: ['./employee-access.component.css']
})
export class EmployeeAccessComponent implements OnInit {

  @Input() employeeAccessForm: FormGroup;
  @Input() systemAccess: boolean;

  @Output() accessEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  bodyDescription: string;
  access: boolean = false;

  accessesTypes: Select[] = [
    {
      value: "owner",
      name: "Proprietário",
      description: `O Proprietário tem total acesso ao sistema. Podendo interagir em todas as áreas como:
      <br> área do contador: O proprietário pode ter acesso a todas as funionalidades que o <strong>contador</strong> possui.
      <br> área do administrador: O proprietário pode ter acesso a todas as funionalidades que o administrador possui.
      <br> área do operador: O proprietário pode ter acesso a todas as funionalidades que o operador possui.`
    },
    {
      value: "admin",
      name: "Administrador",
      description: `O Administrador tem poderes de cadastrar / remover funcionários, clientes e fornecedores.
      Também tem acesso ao balanço da empresa, metas, promoções, podendo  blá blá`
    },
    {
      value: "operator",
      name: "Operador",
      description: `O Operador pode  bla bla.`
    },
    {
      value: "accountant",
      name: "Contador",
      description: `O Contador pode bla bla.`
    }
  ]

  disabledAccess() {
    this.accessEmitter.emit(this.access);
  }

}
