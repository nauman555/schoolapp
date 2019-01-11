// ****************************************************************************************** //
// ************* We define business logic here for calling Node API's ************************** //
//******************************************************************************************* */
//******************** Node APIs path  MainProject/Routes/route.js *********************** */

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class ClassDataService {
    constructor(private http: Http) { }


        //*********************** Call API for retreiewing Teachers Data ********************

  getTeachersF()
  {
    return this.http.get('http://localhost:3000/get-teachers')
      .map(response => response.json());
  }


}
