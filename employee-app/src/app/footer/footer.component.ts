import { Component, OnInit } from '@angular/core';
import { SOCIALICONS } from '../listSocialIcons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
  copyright = "BenTzion Fis";
  copyrightYear = " 2021";
  socialButtons = SOCIALICONS;
}
