import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {BaseService} from "../../../../commons/service/base-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  doLogin(login: Login, language: string): Observable<Login> {
    return this.http
      .post(`${this.baseUrl}/security/login`, login, this.getHeader(language))
      .pipe(
        map(this.extractData),
        catchError(this.responseError)
      );
  }
}
