// ****************************************************************************************** //
// ************* We define business logic here for calling Node API's ************************** //
//******************************************************************************************* */
//******************** Node APIs path  MainProject/Routes/route.js *********************** */

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SectionDataService {
    public headers = new Headers();

    constructor(private http: Http) { 
        this.headers.append('Content-type' , 'application/json');
    }


    
  addSectionF(sectionDetails)
  {
 
    return this.http.post('http://localhost:3000/add-class', classDetails,{headers:this.headers})
      .map(response => response.json());

  }

}
