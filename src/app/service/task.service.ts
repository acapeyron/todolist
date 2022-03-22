import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService {

  private tasksUrl: string;
  private taskUrl: string;

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:9000/tasks';
    this.taskUrl = 'http://localhost:9000/task';
  }

  public create(task: Task) {
    return this.http.post<Task>(this.taskUrl, task);
  }

  public find(task: Task): Observable<Task> {
    return this.http.get<Task>(this.taskUrl + "/" + task.id);
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  public findByCategory(category: String): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl + "/" + category);
  }

  public update(task: Task): Observable<Task> {
    return this.http.put<Task>(this.taskUrl + "/" + task.id, task);
  }

  public delete(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.taskUrl + "/" + task.id);
  }
}
