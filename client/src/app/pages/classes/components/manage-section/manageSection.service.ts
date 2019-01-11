
//******************** Node APIs path  MainProject/Routes/route.js *********************** */

import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SectionDataService {
    public headers = new Headers();
    public serverLink = 'http://localhost:3000';

    constructor(private http: Http) { 
        this.headers.append('Content-type' , 'application/json');
    }



  //*************** Call API to get section data against class *****************

  getSectionF(class_id)
  {
    return this.http.get(this.serverLink+'/get-section/'+ class_id)
      .map(response => response.json());
  }


    //*************** Call API to get single section data against class *****************

  getSingleSectionF(section_id,class_id){

    return this.http.get(this.serverLink+'/get-singleSection/'+ section_id + '/' + class_id)
      .map(response => response.json());
  }


  //********************* Call API for add Section Data ***********************
    
  addSectionF(sectionDetails)
  {
 
    return this.http.post(this.serverLink+'/add-section', sectionDetails,{headers:this.headers})
      .map(response => response.json());

  }

  //*********************** Call API for Delete Section Data ********************

  delSectionF(clas_id,section_id,deleteStatus){
   
    return this.http.put(this.serverLink+'/delete-section/'+clas_id +'/'+section_id , deleteStatus ,{headers:this.headers} )
      .map(response => response.json());
     

  }

    //*********************** Call API for Delete Section Data By class ID ********************

    delSectionByClassIdF(deleteStatus ,id){
   
      return this.http.put(this.serverLink+'/delete-sectionByClassId/'+id , deleteStatus ,{headers:this.headers} )
        .map(response => response.json());
       
  
    }


      //*************** Call API to check whether Section already added against selected class ************* */

  sectionExistCheckF(class_id,section_name){
    return this.http.get(this.serverLink+'/check-sectionExists/'+class_id +'/'+section_name)
    .map(res => res.json());

  }

//*********************** Call API for Updating Section Data  ********************

  updateSectionF(updateSectionData,clas_id,section_id){

    return this.http.put(this.serverLink+'/update-section/'+clas_id + '/' + section_id , updateSectionData ,{headers:this.headers} )
    .map(response => response.json());
   

  }

  
}
