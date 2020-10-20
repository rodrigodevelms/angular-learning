import {Component, OnInit} from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "./models/login";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  securityForm: FormGroup;
  login: Login;

  constructor(
    public dialogRef: MatDialogRef<SecurityComponent>,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.securityForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120)
      ]],
      company: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(120)
      ]]
    });
  }

  doLogin() {
    this.login = Object.assign(
      {},
      this.login, this.securityForm.value)
    this.dialogRef.close()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateField(value: string, name: string) {
    if (this.securityForm.get(value).hasError('required')) {
      return `O campo ${name} é obrigatório`
    }
    return this.securityForm.get(value).errors ? `O campo ${name} deve conter entre 5 e 120 caracteres` : '';
  }
}
