export class LocalStorage {
  public saveToken(token: string) {
    localStorage.setItem("rjdesenvolvimento", token);
  }

  public removeToken() {
    localStorage.removeItem("rjdesenvolvimento");
  }

  public getToken(): string {
    return localStorage.getItem("rjdesenvolvimento");
  }

  public getTokenAsObject(): string {
    return JSON.parse(atob(this.getToken().split('.')[1]));
  }
}
