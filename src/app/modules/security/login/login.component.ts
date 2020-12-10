import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Login} from "./models/login";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LoginService} from "./service/login.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {LocalStorage} from "../../../commons/storage/local-storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // VARIABLES *************************************************************

  loginForm: FormGroup;
  login: Login;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  localStorage = new LocalStorage();
  token: string;

  // FUNCTIONS *************************************************************

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder: FormBuilder,
    private service: LoginService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public isLoggedIn: boolean
  ) {
  }

  ngOnInit()
    :
    void {
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

  fun_login() {
    if (this.loginForm.valid) {
      this.login = Object.assign(
        {},
        this.login, this.loginForm.value)
      this.dialogRef.close()
      this.service.doLogin(this.login, "BR").subscribe(
        success => {
          this.fun_processSuccess(success);
          this.fun_isLoggedIn();
        },
        fail => {
          this.fun_processFailure(fail)
        }
      )
    }
  }

  fun_cancel(): void {
    this.dialogRef.close();
  }

  fun_validateField(value: string, name: string) {
    if (this.loginForm.get(value).hasError('required')) {
      return `O campo ${name} é obrigatório`
    }
    return this.loginForm.get(value).errors ? `O campo ${name} deve conter entre 5 e 120 caracteres` : '';
  }

  fun_isLoggedIn() {
    this.token = this.localStorage.getTokenAsObject();
    if (this.token) this.dialogRef.close({data: this.isLoggedIn = true});
  }

// PRIVATE FUNCTIONS **********************************************************

  private fun_openSnackBar(message: string) {
    this._snackBar.open(message, null, {
      duration: 4500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['blue-snackbar']
    });
  }

  private fun_processSuccess(response: any) {
    this.loginForm.reset();
    this.service.localStorage.saveToken(response.token)
  }

  private fun_processFailure(fail: any) {
    this.fun_openSnackBar(fail.error.errors);
  }
}
