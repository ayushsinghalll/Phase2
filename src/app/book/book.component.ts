import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
title2='Book Form'
  bookForm:FormGroup
  constructor(private formBuilder:FormBuilder) {
  this.bookForm=this.formBuilder.group({
    id:['1',[Validators.required,Validators.max(10)]],
    title:['Java',[Validators.required,Validators.minLength(4)]],
    dateOfPublishing:['2000/12/12',[Validators.required]],
    author:this.formBuilder.group({
      Name:['Ayush',[Validators.required]],
      Email:['ayush@gmail.com',[Validators.required]]
    })
  })
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
get name(){
  return this.bookForm.get('author')?.get('name')
}
get email(){
  return this.bookForm.get('author')?.get('email')
}
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.bookForm.value);
  }
}

