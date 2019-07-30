import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodosService } from './todos.service';

@Component({
  selector: 'tl-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = new Observable();

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todos = this.todosService.loadTodoList();
  }

}
