
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TeachersDataService {
    constructor(private http: Http) { }


    //*********************** Call retreiewing Teachers Data API ********************

  getContactsF()
  {
    return this.http.get('http://localhost:3000/get-teachers')
      .map(response => response.json());
  }


}
