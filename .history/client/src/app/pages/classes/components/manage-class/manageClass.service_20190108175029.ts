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
    this.headers.append('Content-type' , 'application/json');
    constructor(private http: Http) { }


        //*********************** Call API for retreiewing Class Data ********************

  getClassesF()
  {
    return this.http.get('http://localhost:3000/get-classes')
      .map(response => response.json());
  }

  //*********************** Call API for retreiewing single Class Data ********************

  getSingleClassF(id){
    return this.http.get('http://localhost:3000/get-class/'+id)
    .map(res => res.json());

  }

  //********************* Call API to check whether class already added ******************* */

  classExistCheckF(c_name){
    return this.http.get('http://localhost:3000/check-class/'+c_name)
    .map(res => res.json());

  }

  //*********************** Call  API for Adding New Class Data *****************************

  addClassF(classDetails)
  {
    
    
    return this.http.post('http://localhost:3000/add-teacher', classDetails,{headers:headers})
      .map(response => response.json());

  }

//*********************** Call  API for Updating Class Data *****************************

  updateTeacherF(classUpdateDetails , id)
  {
    let headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return this.http.put('http://localhost:3000/update-class/'+id , classUpdateDetails,{headers:headers})
      .map(response => response.json());

  }

  //*********************** Call  API for Deleting Teachers Data *****************************

  deleteTeachersF(id){
    let status = 0;
    let headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return this.http.put('http://localhost:3000/delete-teacher/'+id , status ,{headers:headers} )
      .map(response => response.json());

  }


}
