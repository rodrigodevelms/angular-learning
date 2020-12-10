import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


import {CompanyRoutes} from "./company.routes";
import {MainPageComponent} from './new-account/employee/main-page/main-page.component';
import {EmployeePersonalComponent} from "./new-account/employee/personal/employee-personal.component";
import {EmployeeAddressComponent} from './new-account/employee/address/employee-address.component';
import {EmployeeProfessionalComponent} from './new-account/employee/professional/employee-professional.component';
import {EmployeeAccessComponent} from './new-account/employee/access/employee-access.component';
import {NgxMaskModule} from "ngx-mask";

import {EmployeeService} from "./new-account/employee/service/employee.service";
import {NgxCurrencyModule} from "ngx-currency";

import {CommonsModule} from "../../commons/commons.module";

@NgModule({
  declarations: [
    MainPageComponent,
    EmployeePersonalComponent,
    EmployeeAddressComponent,
    EmployeeProfessionalComponent,
    EmployeeAccessComponent,
  ],
  imports: [
    CommonModule,
    FlexModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,

    CompanyRoutes,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    NgxCurrencyModule,

    CommonsModule
  ],
  providers: [
    EmployeeService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class CompanyModule {
}
