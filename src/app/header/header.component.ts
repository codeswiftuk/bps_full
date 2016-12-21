import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  address1 = 'Barrowby Pre School';
  address2 = 'Barrowby Sports Pavillion';
  address3 = 'Low Road';
  town = 'Barrowby';
  county = 'Lincolnshire';
  postcode = 'NG32 1DL';
  phone = '07415 450311';
  email = 'barrowbypreschool@yahoo.co.uk';
 
  constructor() { }

  ngOnInit() {
  }

}
