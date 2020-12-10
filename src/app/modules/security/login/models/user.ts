import {BaseModel} from "../../../../commons/model/base-model";
import {Payload} from "./payload";
import {Credential} from "./credential";

export class User {
  base: BaseModel;
  credentials: Credential;
  payload: Payload;


  constructor(
    base?: BaseModel,
    credentials?: Credential,
    payload?: Payload
  ) {
    this.base = base;
    this.credentials = credentials;
    this.payload = payload;
  }
}
