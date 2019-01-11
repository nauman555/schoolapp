import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { RouterModule, Routes} from '@angular/router';

import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  onClickSubmit(data) {
    let email = data.useremail;
    let password = data.userPassword;
  
    if (email === 'n@n' && password === '123'){
      this.router.navigate(['/pages/index']);
    } else{
      console.log('error')
    }
    console.log(data.useremail)
 }
}
