import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {

  @Input() employee?: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
