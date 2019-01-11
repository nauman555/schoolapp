// ****************************************************************************************** //
// ************* We define business logic here for calling Node API's ************************** //
//******************************************************************************************* */

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TeachersDataService {
    constructor(private http: Http) { }


    //*********************** Call API for retreiewing Teachers Data ********************

  getTeachersF()
  {
    return this.http.get('http://localhost:3000/get-teachers')
      .map(response => response.json());
  }

//*********************** Call API for retreiewing single Teachers Data ********************

  getSingleTeacherF(id){
    return this.http.get('http://localhost:3000/get-teacher/'+id)
    .map(res => res.json());

  }

  //*********************** Call  API for Adding Teachers Data *****************************

  addTeachersF(newTeacherData)
  {
    var headers = new Headers();
    headers.append('Content-type' , 'application/json');
    return this.http.post('http://localhost:3000/add-teacher', newTeacherData,{headers:headers})
      .map(response => response.json());

  }
  
//*********************** Call  API for Adding Teachers Data *****************************
  updateTeacherF(updateTeacherData)
  {

  }

  //*********************** Call  API for DeletingTeachers Data *****************************

  deleteTeachersF(id){
    return this.http.delete('http://localhost:3000/delete-teacher/'+id)
      .map(response => response.json());

  }
}
