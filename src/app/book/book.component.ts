import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm:FormGroup
  constructor(private formBuilder:FormBuilder) {
  this.bookForm=this.formBuilder.group({
    id:['1',[Validators.required,Validators.max(10)]],
    title:['Java',[Validators.required,Validators.minLength(4)]],
    dateOfPublishing:['12-12-2000',[Validators.required]],
    author:this.formBuilder.group({
      Name:['Ayush',[Validators.required]],
      Email:['ayush@gmail.com',[Validators.required]]
    }),
    publishers:this.formBuilder.array([])

  })
  }
  ngOnInit(): void {

  }
get id(){
  return this.bookForm.get('id')
}
get title(){
  return this.bookForm.get('title')
}
get dateOfPublishing(){
  return this.bookForm.get('dateOfPublishing')
}
get Name(){
  return this.bookForm.get('author')?.get('Name')
}
get Email(){
  return this.bookForm.get('author')?.get('Email')
}

  publishers():FormArray{
    return this.bookForm.get('publishers') as FormArray
  }
  newPublisher():FormGroup{
    return this.formBuilder.group({
      publisherName:'',
      publisherCity:''
    })
  }
  addPublisher(){
    this.publishers().push(this.newPublisher())
  }
  removePublisher(publisherIndex:number){
    this.publishers().removeAt(publisherIndex)
  }
  onSubmit(){
    console.log(this.bookForm.value);
  }
}

