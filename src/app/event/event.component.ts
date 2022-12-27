import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../Service/eventService.service";
import {Subscription} from "rxjs";
import {IEvent} from "./event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private eventService:EventService) { }

  sub!:Subscription;

  Events:IEvent[]=[]

  filteredEvent:IEvent[]=[]
  selectedProduct!:IEvent | null;

  ngOnInit(): void {
    this.sub = this.eventService.getEvents().subscribe((response)=>{
      console.log(response)
      this.Events=response
      this.filteredEvent=response
    },
      (err)=>{
      console.log(err)
      },
      ()=>{
      console.log('Completed')
      }
      )
    this.eventService.selectedEventChanges$.subscribe(currentProduct=>this.selectedProduct=currentProduct);
  }
  newProduct():void{
    this.eventService.changeSelectedEvent(this.eventService.newProduct());
  }
  productSelected(product:IEvent):void{
    this.eventService.changeSelectedEvent(product);
  }
}
