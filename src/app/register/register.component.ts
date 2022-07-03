import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm : any;
  register : boolean = false;
  loading : boolean = false;
  message : any = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public userDataService : UserDataService) { }

  ngOnInit(): void {

    this.registerationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get inputControls() { return this.registerationForm.controls; }

  onClickSubmit(){

    this.register = true;

    this.loading = true;

    // stop here if form is invalid
    if(this.registerationForm.invalid) {
      this.loading = false;
      return;
    }
    
    let inputControlsData = this.registerationForm.controls;

    let data = {
      firstName : inputControlsData.firstName.value,
      lastName : inputControlsData.lastName.value,
      username : inputControlsData.username.value,
      password : inputControlsData.password.value
    }

    let hasMatch = this.userDataService.checkUserData(data.username)

    if(!hasMatch){

      this.userDataService.updateUserData(data);
      
      this.loading = false;

      this.router.navigate(['/logIn']);
    }
    else{
      this.loading = false;
      
      this.message = 'UserName is already exist.';

      setTimeout(()=>{
        this.message = null;
      }, 2000);
      
    }
    
  }

}
