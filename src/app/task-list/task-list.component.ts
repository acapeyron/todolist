import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  search: string;
  category: string;
  sub: Subscription;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => { 
      this.category = params.get('category')!; 
      
      if (this.category == 'all'){
        this.taskService.findAll().subscribe(data => {
          this.tasks = data;
        });
      } else {
        this.taskService.findByCategory(this.category).subscribe(data => {
          this.tasks = data;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  } 
}
