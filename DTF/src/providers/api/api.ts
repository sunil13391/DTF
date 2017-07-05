import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getLocationsFromAPI()
  {
    /*var header = new Headers( );
      header.append('Authorization', 'Bearer dTdjl27iOTw4Ss_uFkhsHZZf1QQNtZarBiVe8fxm6VQoJ4jdjTXbfOfFFRY06qVeoR9tDD7SINX6sUnt0kTINqvYdE_KiQ5vvPewteZZ9jfQZOb4WjsbNzEPZQifRr9kiXfyLcr95jvt00nUd-sFm63ers4HsIqtmFhAcXOGytTlp75QNkTd-KQK6KephmKOEWOmAMVDOhFvKW3BD8WVgUNSx1I4H05PNCSzwif7xeeUqgX7gQlwURBh6xnguWSTRIbXdPp_QHCh3f4UBzbyxd4ttuzGNmTPy58BEUMuDp79qlsPj77ivLTFFVz9pARpu7V9yi70nOPA89HKQFEIdy5_MXKfVSGxiy3CkY1XMrQ');
    return this.http.get('http://172.16.213.48/DTF/api/GatePass/GetPurposeForPass',{headers:header}).map(res => res.json());*/

    return this.http.get('http://172.16.213.57/MastekDTF/api/location/getlocations').map(res => res.json());
  }

  getTimeSlotsFromAPI(locno)
  {
    /*var header = new Headers( );
      header.append('Authorization', 'Bearer dTdjl27iOTw4Ss_uFkhsHZZf1QQNtZarBiVe8fxm6VQoJ4jdjTXbfOfFFRY06qVeoR9tDD7SINX6sUnt0kTINqvYdE_KiQ5vvPewteZZ9jfQZOb4WjsbNzEPZQifRr9kiXfyLcr95jvt00nUd-sFm63ers4HsIqtmFhAcXOGytTlp75QNkTd-KQK6KephmKOEWOmAMVDOhFvKW3BD8WVgUNSx1I4H05PNCSzwif7xeeUqgX7gQlwURBh6xnguWSTRIbXdPp_QHCh3f4UBzbyxd4ttuzGNmTPy58BEUMuDp79qlsPj77ivLTFFVz9pARpu7V9yi70nOPA89HKQFEIdy5_MXKfVSGxiy3CkY1XMrQ');
    return this.http.get('http://172.16.213.48/DTF/api/GatePass/GetPurposeForPass',{headers:header}).map(res => res.json());*/
    locno++;
    var header = new Headers();
    header.append('Content-type', 'text/Json; charset=utf-8');

    return this.http.post('http://172.16.213.57/MastekDTF/api/busslot/getbusslots', locno, {headers: header}).map(res => res.json());
  }

}
