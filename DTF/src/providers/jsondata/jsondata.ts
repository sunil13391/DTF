import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the JsondataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JsondataProvider {
public users: any[];

  constructor(public http: Http) {
    this.users;
  }

getData(){
  this.http.get('/assets/json/people.json').map (res => res.json()).subscribe(data =>
   {
        this.users = data['people'];
        console.log(this.users);
        return Promise.resolve(this.users)
      },
      err => {
          console.log("it's seems like there is no users here !");
      });
}
}
