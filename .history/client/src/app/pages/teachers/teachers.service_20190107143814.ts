import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TeachersDataService {
    constructor(private http: Http) { }


    //*********************** retreiewing contacts ********************

  getContacts()
  {
    return this.http.get('http://localhost:3000/get-teachers')
      .map(response => response.json());
  }

    teachers_info = [
        {
            id: 1,
            t_name: 'Sir Amir',
            t_email: 'amir@gmail.com',
            designation: 'Teacher',
            t_phoneNum: '923129885885',
            t_address: 'Lahore Pakistan',
            t_qualification: 'MA, Msc'
        },
        {
            id: 2,
            t_name: 'Sir Salman',
            t_email: 'salman@gmail.com',
            designation: 'V Principle',
            t_phoneNum: '923129885885',
            t_address: 'Rawalpindi Pakistan',
            t_qualification: 'MA, Msc , MSCS'
         
        }
    ];

}
