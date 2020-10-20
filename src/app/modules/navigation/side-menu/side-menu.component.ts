import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
}
