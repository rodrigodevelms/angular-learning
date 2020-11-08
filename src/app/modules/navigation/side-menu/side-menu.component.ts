import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "./models/user";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Output() public sidenavClose = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSidenavClose() {
    this.sidenavClose.emit();
  }

  user: User =
    {
      id: "123132",
      name: "Rodrigo Batista",
      position: "Sócio Proprietário",
      photo: "../../../assets/photos/rodrigo.jpg",
      cards: [
        {
          title: "Funcionários",
          children: [
            {
              icon: "500px",
              anchor: "#",
              fontSet: "fas",
              fontIcon: "fa-user-circle",
              matLine: "Novo cadastro"
            },
            {
              icon: "accessible-icon",
              anchor: "#",
              fontSet: "fas",
              fontIcon: "fa-search",
              matLine: "Localizar"
            },
          ]
        },
        {
          title: "Empresa",
          children: [
            {
              icon: "amazon",
              anchor: "#",
              fontSet: "fas",
              fontIcon: "fa-industry",
              matLine: "Dados"
            },
            {
              icon: "amazon-pay",
              anchor: "#",
              fontSet: "fas",
              fontIcon: "fa-building",
              matLine: "Filiais"
            }
          ]
        }
      ]
    }
}
