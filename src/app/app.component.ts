import { Component } from '@angular/core';
import {IProduct} from "./product/iProduct";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  pageTitle:string=
    'My Angular App';
  products:IProduct[]=[];


  name:string='OnlineRentals';

  onProductSelection(obj:IProduct){
    console.log(JSON.stringify(obj));
    this.products=[...this.products,obj];

  }

}
