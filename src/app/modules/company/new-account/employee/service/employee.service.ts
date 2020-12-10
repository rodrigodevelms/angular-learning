import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {BaseService} from "../../../../../commons/service/base-service";
import {Employee} from "../main-page/model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  insertEmployee(employee: Employee, language: string): Observable<Employee> {
    return this.http
      .post(`${this.baseUrl}/employee`, employee, this.getHeader(language))
      .pipe(
        map(this.extractData),
        catchError(this.responseError)
      );
  }
}
