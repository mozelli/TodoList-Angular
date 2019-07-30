import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tl-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoItem = [];

  constructor() { }

  ngOnInit() {
  }

  markCompleted(event) {
    
  }

}
