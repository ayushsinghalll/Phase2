import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './events';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'event-detail',
  templateUrl:'./event-detail.component.html',
  styleUrls:['./event-detail.component.css'],
  animations:[
    trigger('enlarge',[

      state('start',style({
        width:'50px' , height:'50px'
      })),

      state('end',style({
        height:'300px',width:'300px'
      })),
      //transition('start=>end',animate('1s linear')),
      transition('start=>end',[
        animate('0s 3s')
      ]),

        // ]),

    ])]
})

export class EventDetailComponent {
  isHovering:boolean= false;
id:number=0;
  constructor(){}

  @Input() event:any;
  @Input() message:string='';


  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
  applyAnimation($event: any){
    this.isHovering=!this.isHovering;

  }
}
