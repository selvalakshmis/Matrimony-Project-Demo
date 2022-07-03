import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewrequests',
  templateUrl: './viewrequests.component.html',
  styleUrls: ['./viewrequests.component.css']
})
export class ViewrequestsComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit(): void {

    this.date = new Date();
  }

}
