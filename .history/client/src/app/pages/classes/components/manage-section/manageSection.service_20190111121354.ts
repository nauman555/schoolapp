
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



  //*************** Call API to get section data against class *****************

  getSectionF(class_id)
  {
    return this.http.get('http://localhost:3000/get-section/'+ class_id)
      .map(response => response.json());
  }


    //*************** Call API to get single section data against class *****************

  getSingleSectionF(section_id,class_id){

    return this.http.get('http://localhost:3000/get-singleSection/'+ section_id + '/' + class_id)
      .map(response => response.json());
  }


  //********************* Call API for add Section Data ***********************
    
  addSectionF(sectionDetails)
  {
 
    return this.http.post('http://localhost:3000/add-section', sectionDetails,{headers:this.headers})
      .map(response => response.json());

  }

  //*********************** Call API for Delete Section Data ********************

  delSectionF(deleteStatus ,id){
   
    return this.http.put('http://localhost:3000/delete-section/'+id , deleteStatus ,{headers:this.headers} )
      .map(response => response.json());
     

  }

    //*********************** Call API for Delete Section Data By class ID ********************

    delSectionByClassIdF(deleteStatus ,id){
   
      return this.http.put('http://localhost:3000/delete-sectionByClassId/'+id , deleteStatus ,{headers:this.headers} )
        .map(response => response.json());
       
  
    }


      //*************** Call API to check whether Section already added against selected class ************* */

  sectionExistCheckF(class_id,section_name){
    return this.http.get('http://localhost:3000/check-sectionExists/'+class_id +'/'+section_name)
    .map(res => res.json());

  }

//*********************** Call API for Updating Section Data  ********************

  updateSectionF(updateSectionData,clas_id,section_id){

    return this.http.put('http://localhost:3000/delete-sectionByClassId/'+clas_id + '/' + section_id , updateSectionData ,{headers:this.headers} )
    .map(response => response.json());
   

  }

  
}
