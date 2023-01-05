import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {loadTodos,LoadTodoSuccess,LoadTodoFailure} from './todo.action';
import {ToDoService} from "../../todo/todo.service";
import {Injectable} from "@angular/core";

@Injectable()

export class TodoEffects{

  constructor(private actions$:Actions,private todoService:ToDoService){}

  loadTodos$= createEffect(()=>{
    let err1 : string | any;
    return this.actions$
      .pipe(
        ofType(loadTodos),
        mergeMap(()=>this.todoService.getTodos()
          .pipe(map(todos=>LoadTodoSuccess({todos})),
            catchError(error=>of(LoadTodoFailure({ error })))
          ))
      )



  })
}
