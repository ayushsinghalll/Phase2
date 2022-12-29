import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
export class country{
  id:string='';
  name:string='';

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}
export class Trst{
  ID!:number;

  country!:string;

}
@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})


export class TrusteeComponent implements OnInit {

  @ViewChild('trsForm',{})trsForm!:NgForm

  constructor() { }
  countries:country[]=[
    new country("1","India"),
    new country("2","Japan"),
    new country('3','US'),
    new country('4','Russia')
  ];
  trst!:Trst
  ngOnInit(): void {
    this.trst={
      ID:1,
      country:'India'

    }
    setTimeout(()=>{
      this.trsForm.setValue(this.trst);
    })
  }

  onSubmit(trsForm: any) {
    console.log(trsForm.value)
  }
  reset(trstForm:any) {
    trstForm.resetForm();
  }
}
