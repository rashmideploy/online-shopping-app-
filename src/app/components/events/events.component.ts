import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/Model/Event';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(
    private eventService: EventService) {
  }

  events: Event[] = [];
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  //delete Function
  deleteFromService(event: Event) {
    //alert(event.name);
    this.eventService.deleteEvent(event);
  }

  //add function

  addEvent(eventName: string, desc: string, speaker: string) {
    this.eventService.addEvent(eventName, desc, speaker);
  }
}
