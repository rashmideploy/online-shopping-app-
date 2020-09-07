import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // FName: string = 'rashmi';
  // LName: string = 'Pawaskar';
  constructor() { }


  FirstName: string = "rashmi";
  LastName: string = "rashmi";
  Age: number = 30;
  Gender: string = "Female";
  ngOnInit(): void {
  }

}
