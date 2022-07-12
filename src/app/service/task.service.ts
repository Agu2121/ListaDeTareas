import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { task } from '../task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<task[]>{
    return this.http.get<task[]>(this.apiUrl)
  }
} 
