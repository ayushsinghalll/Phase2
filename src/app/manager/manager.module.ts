import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {ManagerRoutingModule} from "./manager-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ManagerComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ManagerModule { }
