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
      photo: ".,/../../assets/photos/rodrigo.jpg",
      cards: [
        {
          title: "One",
          children: [
            {
              icon: "500px",
              anchor: "#",
              imageSet: "",
              imageIcon: "",
              matLine: "sub-one-one"
            },
            {
              icon: "accessible-icon",
              anchor: "#",
              imageSet: "",
              imageIcon: "",
              matLine: "sub-one-two"
            }
          ]
        },
        {
          title: "Two",
          children: [
            {
              icon: "amazon",
              anchor: "#",
              imageSet: "",
              imageIcon: "",
              matLine: "sub-two-one"
            },
            {
              icon: "amazon-pay",
              anchor: "#",
              imageSet: "",
              imageIcon: "",
              matLine: "sub-two-two"
            }
          ]
        }
      ]
    }
}
