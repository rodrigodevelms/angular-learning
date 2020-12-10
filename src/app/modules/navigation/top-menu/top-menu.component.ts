import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../security/login/login.component";
import {LocalStorage} from "../../../commons/storage/local-storage";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  // VARIABLES *******************************************************

  @Output() public sidenavToggle = new EventEmitter();

  token: string = "";
  email: string = "";
  isLoggedIn: boolean = false;
  localStorage = new LocalStorage();

  // FUNCTIONS *******************************************************

  constructor(
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  fun_onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  fun_openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      height: '740px',
      disableClose: true,
      data: {
        dataKey: this.isLoggedIn
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isLoggedIn = result.data;
      console.log('The dialog was closed');
    });
  }


  fun_logout() {
    this.localStorage.removeToken();
    this.isLoggedIn = false
  }
}
