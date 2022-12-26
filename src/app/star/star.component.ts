import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit , OnChanges{
  @Input() rating:number=0
  @Output() ratingChanged:EventEmitter<String> = new EventEmitter<String>();
  cropWidth:number=75
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  this.cropWidth=this.rating * 75/5
  }
  starClicked():void{
    this.ratingChanged.emit(`star click event is clicked ${this.rating} Times`)
  }

}
