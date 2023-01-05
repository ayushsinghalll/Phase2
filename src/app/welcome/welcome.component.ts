import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  welcomeMsg:string="Welcome to Angular App";
  num:number=0;
  data:number=3;
  constructor() { }
ngOnInit():void{
  // const subject = new Subject()
  // subject.subscribe(d=>console.log(d))
  // subject.subscribe(d=>console.log(d))
  // subject.next(Math.random())
  //
  // const sub = new Subject()
  // const data = this.http.get('/api/products')
  // subject.subscribe(d=>console.log(d))
  // subject.subscribe(d=>console.log(d))
  // const result = data.subscribe(sub)
}

}
