import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./book/book.component";
import {StudentComponent} from "./student/student.component";
import {HomeComponent} from "./home/home.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {TrusteeComponent} from "./trustee/trustee.component";





const routes:Routes=[
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'book',component:BookComponent,pathMatch:'full'
  },
  {
    path:'student',component:StudentComponent,pathMatch:'full'
  },
  {
    path:'trst',component:TrusteeComponent,pathMatch:"full"
  },
  {
    path:'**',component:PagenotfoundComponent
  }
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)  ]
})
export class AppRoutingModule { }
