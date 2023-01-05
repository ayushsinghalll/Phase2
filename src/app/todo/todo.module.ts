import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page.component';
import {FormsModule} from "@angular/forms";
import {TodoRoutingModule} from "./todo-routing.module";
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "../state/todos/todo.reducer";
import {TodoEffects} from "../state/todos/todo.effects";
import {EffectsModule} from "@ngrx/effects";



@NgModule({
  declarations: [
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo',todoReducer),
    EffectsModule.forFeature(TodoEffects)

  ]
})
export class TodoModule { }
