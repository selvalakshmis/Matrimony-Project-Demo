import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  userData : any[] = [];

  logInUserData = {
    userName : '',
    password : ''
  }

  constructor() { }

  updateUserData(data : any){
  this.userData.push(data);
  }

  checkUserData(userName : any){

    let hasMatch  = false;

    if(this.userData.length > 0){
      hasMatch  = this.userData.filter(data => data.username == userName).length > 0;
    }
    
    return hasMatch ;

  }

  checkLogInData(userName :  any, password : any){
    
    let hasMatch  = false;

    if(this.userData.length > 0){
      hasMatch  = this.userData.filter(data => (data.username == userName && data.password == password) ).length > 0;
    }
    
    return hasMatch ;
  }

  setLoginUserData(userName : any, password : any){
    this.logInUserData.userName = userName;
    this.logInUserData.password = password;
  }

  getLogInUserName(){
    return this.logInUserData.userName;
  }

}
