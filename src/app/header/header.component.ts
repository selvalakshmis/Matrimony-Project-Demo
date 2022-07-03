import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  wishingText : string = 'Hi'

  userName : string = '';

  constructor( public userDataService : UserDataService) { }

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
