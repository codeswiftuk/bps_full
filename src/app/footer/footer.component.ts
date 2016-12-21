import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  address1 = 'Barrowby Pre School';
  address2 = 'Barrowby Sports Pavillion';
  address3 = 'Low Road';
  town = 'Barrowby';
  county = 'Lincolnshire';
  postcode = 'NG32 1DL';
  phone = '07415 450311';
  email = 'barrowbypreschool@yahoo.co.uk';
  google_map_src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.003910707881!2d-0.6932222842771888!3d52.91235707989032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48783181a078bcef%3A0xd28fd83b73620c98!2sBarrowby+Preschool!5e0!3m2!1sen!2suk!4v1481054000519';


  
  constructor() { }

  ngOnInit() {
  }

}
