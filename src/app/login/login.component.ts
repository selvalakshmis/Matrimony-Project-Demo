import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInForm : any;
  logIn : boolean = false;
  loading : boolean = false;
  message : any = null;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    public userDataService : UserDataService,  
  ) { }

  ngOnInit(): void {    
    
    this.logInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });    

  }

  get inputControls() { return this.logInForm.controls; }

  onClickSubmitButton() {
     
    this.logIn = true;

    this.loading = true;

    let logInFormCOntrols = this.logInForm.controls;

    let userName = logInFormCOntrols.username.value;

    let password = logInFormCOntrols.password.value;

    // stop here if form is invalid
    if (this.logInForm.invalid) {
      this.loading = false;
      return;
    }

    let hasMatch = this.userDataService.checkLogInData(userName, password);

    if(hasMatch){

      this.loading = false;

      this.userDataService.setLoginUserData(userName, password);

      this.router.navigate(['/dashboard']);
    }
    else{

      this.loading = false;

      this.message = 'Username or pasword is incorrect.';

      setTimeout(()=>{
        this.message = null;
      }, 2000);

    }      
  }

}
