import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  URL = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  loadTodoList() {
    return this.http.get(`${this.URL}?_limit=10`)
      .pipe(take(1));
  }
}
