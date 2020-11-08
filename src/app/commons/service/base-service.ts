import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";

export abstract class BaseService {

  protected getHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  protected extractData(response: any) {
    return response.data || {};
  }

  protected responseError(response: Response | any) {
    let customError: string[] = [];

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === "Unknow Error") {
        customError.push("Erro desconhecido");
        response.error.errors = customError;
      }
    }
    return throwError(response);
  }
}
