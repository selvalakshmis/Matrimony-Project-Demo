import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  navbarCollapsed = true;

  wishingText : string = 'Hi'

  userName : string = '';

  constructor(
    public userDataService : UserDataService
  ) { }

  ngOnInit(): void {
    this.userName = this.userDataService.getLogInUserName();
    this.calculateTime();
  } 
  

  calculateTime(){
    
    let today = new Date();

    let curHr = today.getHours()

    if (curHr < 12) {
      this.wishingText = "Good Morning!"
    }
    else if (curHr < 18) {
      this.wishingText = "Good AfterNoon!"
    }
    else {
      this.wishingText = "Good Evening!"
    }

  }

  

}
