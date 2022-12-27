import {Component, Input, OnInit} from '@angular/core';
import {IEvent} from "./event";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  @Input() events : IEvent[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
