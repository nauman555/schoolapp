// ****************************************************************************************** //
// ************* We define business logic here for calling Node APIs ************************** //
//******************************************************************************************* */

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TeachersDataService {
    constructor(private http: Http) { }


    //*********************** Call API retreiewing Teachers Data ********************

  getContactsF()
  {
    return this.http.get('http://localhost:3000/get-teachers')
      .map(response => response.json());
  }

  //*********************** Call  API retreiewing Teachers Data *****************************
  addContact(newContact)
  {
    var headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact,{headers:headers})
      .map(response => response.json());

  }
}
