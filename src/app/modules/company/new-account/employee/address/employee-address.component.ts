import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee-address',
  templateUrl: './employee-address.component.html',
  styleUrls: ['./employee-address.component.css']
})
export class EmployeeAddressComponent implements OnInit {

  @Input() employeeAddressForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
