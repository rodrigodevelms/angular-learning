import {v4 as uuidv4} from 'uuid';

export class BaseModel {
  id?: uuidv4
  active: boolean

  constructor(id: uuidv4, active: boolean) {
    this.id = id;
    this.active = active;
  }
}
