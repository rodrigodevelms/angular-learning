import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {BaseService} from "../../../../../commons/service/base-service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {

  constructor(private http: HttpClient) {
    super()
  }

  // insertEmployee(employee: Employee): Observable<Employee> {
  //   return this.http
  //     .post('', employee, this.getHeader())
  //     .pipe(
  //       map(this.extractData),
  //       catchError(this.responseError)
  //     );
  // }
}
