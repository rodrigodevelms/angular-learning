export class Payload {
  email: string;
  name: string;
  position: string;
  photo: string;
  company: string;
  scopes: string[];

  constructor(
    email: string,
    name: string,
    position: string,
    photo: string,
    company: string,
    scopes: string[]
  ) {
    this.email = email;
    this.name = name;
    this.position = position;
    this.photo = photo;
    this.company = company;
    this.scopes = scopes;
  }
}
