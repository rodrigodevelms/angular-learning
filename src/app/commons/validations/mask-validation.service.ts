import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaskValidationService {

  constructor() {
  }

  public fun_hourMaskPattern(): {} {
    return {'0': {pattern: new RegExp('\[0-9\]')}}
  }

  public fun_currencyRealPattern(): {} {
    return {prefix: 'R$ ', thousands: '.', decimal: ','}
  }

}
