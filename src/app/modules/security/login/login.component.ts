import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "./models/login";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
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
      this.login, this.loginForm.value)
    this.dialogRef.close()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validateField(value: string, name: string) {
    if (this.loginForm.get(value).hasError('required')) {
      return `O campo ${name} é obrigatório`
    }
    return this.loginForm.get(value).errors ? `O campo ${name} deve conter entre 5 e 120 caracteres` : '';
  }

  getColor() {
    return this.loginForm.get('company').errors ? `warn` : '';
  }
}
