import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {LegalPerson} from "./model/legal-person";
import {PhysicalPerson} from "./model/physical-person";
import {Address} from "./model/address";
import {ProfessionalData} from "./model/professional-data";
import {ContractualData} from "./model/contractual-data";
import {Employee} from "./model/employee";
import {BaseModel} from "../../../../../commons/model/base-model";
import {User} from "../../../../security/login/models/user";
import {Credential} from "../../../../security/login/models/credential";

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
  employeeAccessForm: FormGroup;

  foodVoucher: boolean = false;
  transportationVoucher: boolean = false;
  accessRole: boolean = false;
  physicalPerson: boolean = true;
  legalPerson: boolean = false;

  // INTERFACES *****************

  iPhysicalPerson: PhysicalPerson;
  iLegalPerson: LegalPerson;
  iAddress: Address;
  iProfessionalData: ProfessionalData;
  iContractData: ContractualData;


  // OBJECT  ***********************

  employee: Employee;
  user: User;

  // FUNCTIONS *************************************************************

  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeService,
    private cdr: ChangeDetectorRef,
  ) {
  };

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
      companyType: [
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
        '', [
          Validators.required,
          Validators.pattern(/^(\d)*\.[0-9]{2}$/)
        ]
      ],
      contractValue: [
        '', [
          Validators.required,
          Validators.pattern(/^(\d)*\.(\d){2}$/)
        ]
      ],
      hiringDate: [
        '',
        Validators.required
      ],
      weekHours: [
        '', [
          Validators.required,
          Validators.pattern(/^(\d){4}$/)
        ]
      ],
      bond: [
        '',
        Validators.required
      ],
      workTime: [
        '',
        Validators.required
      ],
      foodVoucher: [
        '', [
          Validators.required,
          Validators.pattern(/^(\d)*\.(\d){2}$/)
        ]
      ],
      transportationVoucher: [
        '', [
          Validators.required,
          Validators.pattern(/^(\d)*\.(\d){2}$/)
        ]
      ],
      foodVoucherStatus: [
        this.foodVoucher
      ],
      transportationVoucherStatus: [
        this.transportationVoucher
      ]
    });

    this.employeeAccessForm = this.formBuilder.group({
      accessRole: [
        '', Validators.required
      ],
      accessRoleStatus: [
        this.accessRole
      ]
    });

  };

  fun_transportationVoucherStatus() {
    this.transportationVoucher = !this.transportationVoucher;
    this.transportationVoucher ? this.employeeProfessionalForm.get('transportationVoucher').disable() : this.employeeProfessionalForm.get('transportationVoucher').enable();
  };

  fun_foodVoucherStatus() {
    this.foodVoucher = !this.foodVoucher;
    this.foodVoucher ? this.employeeProfessionalForm.get('foodVoucher').disable() : this.employeeProfessionalForm.get('foodVoucher').enable();
  };

  fun_roleAccessStatus() {
    this.accessRole = !this.accessRole;
    this.accessRole ? this.employeeAccessForm.get('accessRole').disable() : this.employeeAccessForm.get('accessRole').enable();
  };

  fun_isPhysicalPerson(): boolean {
    if (this.fun_verifyPhysicalPerson()) {
      this.physicalPerson = true;
      return true;
    } else {
      this.physicalPerson = false;
      return false;
    }
  }


  fun_isLegalPerson(): boolean {
    if (this.fun_verifyLegalPerson()) {
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
      this.fun_assignEmployeeObject();
      this.service.insertEmployee(this.employee, 'BR').subscribe();
    } else {
      console.log("invalid")
    }
  }

  // PRIVATE FUNCTIONS  ************************

  private fun_verifyPhysicalPerson(): boolean {
    return this.employeePersonalForm.get('document').value.length <= 11;
  };

  private fun_verifyLegalPerson(): boolean {
    return this.employeePersonalForm.get('document').value.length > 11;
  };

  private fun_assignEmployeeObject() {
    this.fun_assignAddress();
    this.fun_assignUser();
    if (this.fun_verifyPhysicalPerson()) this.fun_verifyPhysicalPerson();
    if (this.fun_verifyLegalPerson()) this.fun_assignLegalPerson();
  }

  private fun_assignAddress() {
    this.iAddress = Object.assign({}, this.iAddress, this.employeeAddressForm.value);
  }

  private fun_assignUser() {
    this.user = new User(
      new BaseModel(null, true),
      new Credential(
        this.employeeAccessForm.value.username,
        this.employeeAccessForm.value.password
      )
    )
  }

  private fun_assignLegalPerson() {
    this.iLegalPerson = Object.assign({}, this.iLegalPerson, this.employeePersonalForm.value);
    this.iContractData = Object.assign({}, this.iContractData, this.employeeProfessionalForm.value);
    this.employee = new Employee(
      new BaseModel(null, true),
      this.user,
      this.iAddress,
      null,
      this.iLegalPerson,
      null,
      this.iContractData
    )
  }

  private fun_assignPhysicalPerson() {
    this.iPhysicalPerson = Object.assign({}, this.iPhysicalPerson, this.employeePersonalForm.value);
    this.iProfessionalData = Object.assign({}, this.iProfessionalData, this.employeeProfessionalForm.value);
    this.employee = new Employee(
      new BaseModel(null, true),
      this.user,
      this.iAddress,
      this.iPhysicalPerson,
      null,
      this.iProfessionalData,
      null
    )
  }
}
