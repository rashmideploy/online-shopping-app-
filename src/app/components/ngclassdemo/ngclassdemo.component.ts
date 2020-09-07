import { Component, OnInit } from '@angular/core';
import { StrangerThings } from 'src/app/Model/StrangerThings';

@Component({
  selector: 'app-ngclassdemo',
  templateUrl: './ngclassdemo.component.html',
  styleUrls: ['./ngclassdemo.component.css']
})
export class NgclassdemoComponent implements OnInit {
  getColor(country) {

    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }


  ST: StrangerThings[] = [
    {
      actor: 'Millie Bobby Brown',
      country: 'UK'
    },
    {
      actor: 'Finn Wolfhard',
      country: 'Canada'
    },
    {
      actor: 'Gaten Matarazzo',
      country: 'USA'
    },
    {
      actor: 'Noah Schnapp',
      country: 'USA'
    },
    {
      actor: 'Caleb McLauglin',
      country: 'USA'
    }
  ];

  people: any[] = [
    {
      "name": "Mayank",
      "country": 'UK'
    },
    {
      "name": "Shreya",
      "country": 'USA'
    },
    {
      "name": "Khushi",
      "country": 'HK'
    },
    {
      "name": "Kawal",
      "country": 'UK'
    },
    {
      "name": "Sonali",
      "country": 'India'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
