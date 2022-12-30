import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  this.studentForm = this.formBuilder.group({
    students:this.formBuilder.array([])
  })
  }
  students():FormArray{
  return this.studentForm.get("students") as FormArray
  }
  newStudent():FormGroup{
  return this.formBuilder.group({
    firstname:'',
    lastname:'',
    program:this.formBuilder.array([])
  })
  }
  addStudent(){
  this.students().push(this.newStudent())
  }
  removeStudent(studentIndex:number){
  this.students().removeAt(studentIndex)
  }
  studentProgram(studentIndex:number):FormArray{
  return this.students().at(studentIndex).get('program') as FormArray
  }
  newProgram():FormGroup{
  return this.formBuilder.group({
    programName:'',
    experience:''
  })
  }
  addStudentSkill(studentIndex:number){
  this.studentProgram(studentIndex).push(this.newProgram())
  }
  removeStudentSkill(studentIndex:number,skillIndex:number){
  this.studentProgram(studentIndex).removeAt(skillIndex)
  }
  onSubmit(){
  console.log(this.studentForm.value)
  }

}
