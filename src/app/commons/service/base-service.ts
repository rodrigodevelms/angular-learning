import {HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {LocalStorage} from "../storage/local-storage";
import {environment} from "../../../environments/environment";

export abstract class BaseService {

  baseUrl = environment.baseUrl

  public localStorage = new LocalStorage()

  protected getHeader(
    language: string,
    token?: string
  ) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'language': language,

      })
    };
  }

  protected extractData(response: any) {
    return response;
  }

  protected responseError(response: Response | any) {
    if (response.message.search("Unknown Error") != -1) {
      response.error.errors = "Erro desconhecido. Tente novamente. Caso o erro persista, favor informar a RJ Desenvolvimento.";
    }
    return throwError(response);
  }
}
