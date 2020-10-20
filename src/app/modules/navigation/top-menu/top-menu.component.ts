import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SecurityComponent} from "../../security/security.component";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SecurityComponent, {
      width: '35%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
