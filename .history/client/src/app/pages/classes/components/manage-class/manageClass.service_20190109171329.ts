// ****************************************************************************************** //
// ************* We define business logic here for calling Node API's ************************** //
//******************************************************************************************* */
//******************** Node APIs path  MainProject/Routes/route.js *********************** */

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class ClassDataService {
    public headers = new Headers();

    constructor(private http: Http) { 
        this.headers.append('Content-type' , 'application/json');
    }


        //*********************** Call API for retreiewing Class Data ********************

  getClassesF()
  {
    return this.http.get('http://localhost:3000/get-classes')
      .map(response => response.json());
  }


   //*********************** Call API for retreiewing single Class Data By ID********************

   getSingleClassByIdF(id){
    return this.http.get('http://localhost:3000/get-classById/'+id)
    .map(res => res.json());

  }

  //********************* Call API to check whether class already added ******************* */

  classExistCheckF(c_name){
    return this.http.get('http://localhost:3000/get-classByName/'+c_name)
    .map(res => res.json());

  }

  //*********************** Call  API for Adding New Class Data *****************************

  addClassF(classDetails)
  {
 
    return this.http.post('http://localhost:3000/add-class', classDetails,{headers:this.headers})
      .map(response => response.json());

  }

//*********************** Call  API for Updating Class Data *****************************

  updateClassF(classUpdateDetails , id)
  {
 
    return this.http.put('http://localhost:3000/update-class/'+id , classUpdateDetails,{headers:this.headers})
      .map(response => response.json());

  }

  //*********************** Call  API for Deleting Teachers Data *****************************

  deleteClassF(id){
    let status = 0;
    return this.http.put('http://localhost:3000/delete-class/'+id , status ,{headers:this.headers} )
      .map(response => response.json());

  }


}
