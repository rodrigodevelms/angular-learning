import {BaseModel} from "../../../../../../commons/model/base-model";
import {PhysicalPerson} from "./physical-person";
import {LegalPerson} from "./legal-person";
import {Address} from "./address";
import {ProfessionalData} from "./professional-data";
import {ContractualData} from "./contractual-data";
import {User} from "../../../../../security/login/models/user";

export class Employee {
  base: BaseModel
  physicalPerson?: PhysicalPerson
  legalPerson?: LegalPerson
  address: Address
  professionalData?: ProfessionalData
  contractualData?: ContractualData
  user?: User


  constructor(
    base: BaseModel,
    user: User,
    address: Address,
    physicalPerson?: PhysicalPerson,
    legalPerson?: LegalPerson,
    professionalData?: ProfessionalData,
    contractualData?: ContractualData,
  ) {
    this.base = base;
    this.physicalPerson = physicalPerson;
    this.legalPerson = legalPerson;
    this.address = address;
    this.professionalData = professionalData;
    this.contractualData = contractualData;
    this.user = user;
  }
}
