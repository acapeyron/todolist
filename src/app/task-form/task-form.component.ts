import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../service/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  task: Task;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) {
    this.task = new Task();
  }

  onSubmit() {
    this.taskService.create(this.task).subscribe(() => this.gotoTaskList());
  }

  gotoTaskList() {
    console.log("task created");
    this.router.navigate(['/tasks/all']);
  }

}
