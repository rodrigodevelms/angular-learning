import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewChecked {

  // VARIABLES ****************************************************************

  employeePersonalForm: FormGroup;
  employeeAddressForm: FormGroup;
  employeeProfessionalForm: FormGroup;
  employeeAccessForm: FormGroup

  isLinear = false;
  transportationVoucher: boolean = false;
  foodVoucher: boolean = false;
  roleAccess: boolean = false;
  physicalPerson: boolean = true;
  legalPerson: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeService,
    private cdr: ChangeDetectorRef,
  ) {
  };

  // FUNCTIONS *************************************************************

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.employeePersonalForm = this.formBuilder.group({
      document: [
        '',
        Validators.required],
      rg: [
        '',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)]
      ],
      fancyName: [
        '',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)]
      ],
      name: [
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)]
      ],
      companyName: [
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)]
      ],
      email: [
        '',
        [Validators.required,
          Validators.email,
          Validators.maxLength(120)]
      ],
      phone: [
        '',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)]
      ],
      birthdate: [
        '',
        Validators.required,
      ],
      openingDate: [
        '',
        Validators.required,
      ],
      gender: [
        '',
        Validators.required,
      ],
      type: [
        '',
        Validators.required,
      ],
      maritalStatus: [
        '',
        Validators.required,
      ],
      lineBusiness: [
        '',
        Validators.required,
      ]
    });

    this.employeeAddressForm = this.formBuilder.group({
      country: [
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)]
      ],
      state: [
        '',
        [Validators.required,
          Validators.maxLength(120)]
      ],
      city: [
        '',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)]
      ],
      publicPlace: [
        '',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)]
      ],
      neighborhood: [
        '',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)]
      ],
      number: [
        '',
        Validators.required,
      ],
      complement: [
        '',
      ],
      zipCode: [
        '',
        Validators.required,
      ]
    });

    this.employeeProfessionalForm = this.formBuilder.group({
      position: [
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)]
      ],
      serviceContract: [
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)]
      ],
      salary: [
        '', Validators.required,
      ],
      contractValue: [
        '', Validators.required
      ],
      hiringDate: [
        '',
        Validators.required
      ],
      weekHours: [
        '',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(120)]
      ],
      bond: [
        '',
        Validators.required
      ],
      workTime: [
        '',
        Validators.required
      ],
      vr: [
        '',
        Validators.required
      ],
      vt: [
        '',
        Validators.required
      ],
      vrCheck: [
        this.foodVoucher
      ],
      vtCheck: [
        this.transportationVoucher
      ]
    });

    this.employeeAccessForm = this.formBuilder.group({
      accessPermission: [
        '', Validators.required
      ],
      accessCheck: [
        this.roleAccess
      ]
    });

  };

  fun_transportationVoucherStatus() {
    this.transportationVoucher = !this.transportationVoucher;
    this.transportationVoucher ? this.employeeProfessionalForm.get('vt').disable() : this.employeeProfessionalForm.get('vt').enable();
  };

  fun_foodVoucherStatus() {
    this.foodVoucher = !this.foodVoucher;
    this.foodVoucher ? this.employeeProfessionalForm.get('vr').disable() : this.employeeProfessionalForm.get('vr').enable();
  };

  fun_roleAccessStatus() {
    this.roleAccess = !this.roleAccess;
    this.roleAccess ? this.employeeAccessForm.get('accessPermission').disable() : this.employeeAccessForm.get('accessPermission').enable();
  };

  fun_isPhysicalPerson(): boolean {
    if (this.employeePersonalForm.get('document').value.length <= 11) {
      this.physicalPerson = true;
      return true;
    } else {
      this.physicalPerson = false;
      return false;
    }
  }

  fun_isLegalPerson(): boolean {
    if (this.employeePersonalForm.get('document').value.length > 11) {
      this.legalPerson = true;
      return true;
    } else {
      this.legalPerson = false;
      return false;
    }
  }

  fun_steppeFormValidation(): boolean {
    return (
      this.employeeProfessionalForm.valid &&
      this.employeeAddressForm.valid &&
      this.employeeProfessionalForm.valid &&
      this.employeeAccessForm.valid
    )
  }

  fun_save() {
    if (this.fun_steppeFormValidation()) {
      console.log("valid")
    } else {
      console.log("invalid")
    }
  }

  // STEPS BEGIN ***********
  // physicalPerson1: PhysicalPerson;
  // legalPersons: LegalPerson;
  //
  // stepOne() {
  //   if (this.employeePersonalForm.get('document').value.length <= 11) {
  //     this.physicalPerson1 = Object.assign(
  //       {},
  //       this.physicalPerson1, this.employeePersonalForm.value
  //     )
  //     console.log(this.physicalPerson1);
  //   } else {
  //     this.legalPersons = Object.assign(
  //       {},
  //       this.legalPersons, this.employeePersonalForm.value
  //     )
  //     console.log(this.legalPersons);
  //   }
  // };
  //
  // employeeAddress: Address;
  //
  // stepTwo() {
  //   this.employeeAddress = Object.assign(
  //     {},
  //     this.employeeAddress, this.employeeAddressForm.value
  //   )
  // };
  //
  // employeeProfessional: Professional;
  //
  // stepThree() {
  //   this.physicalPerson1 = Object.assign(
  //     {},
  //     this.employeeProfessional, this.employeeProfessionalForm.value
  //   )
  // };

  // employeeAccess: Access
  //
  // stepFour() {
  //   this.employeeAccess = Object.assign(
  //     {},
  //     this.employeeAccess, this.employeeAccessForm.value
  //   )
  // };

  // STEPS END **********

}
