import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToDoService } from 'src/app/todo/todo.service';
import { catchError, from, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import {addTodo,removeTodo,loadTodos,LoadTodoSuccess,LoadTodoFailure} from './todo.action';
import { TodoState } from './todo.state';
import { getTodos } from './todo.selector';

@Injectable()

export class TodoEffects{

  constructor(private actions$:Actions,private store:Store<TodoState>,private todoService:ToDoService){}


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

  });


  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addTodo, removeTodo),
        withLatestFrom(this.store.select(getTodos)),
        switchMap(([action, todos]) => from(this.todoService.createTodo(todos[0])))
      ),

    { dispatch: false }
  );
}

