import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';  // NgModule Angular service

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})

export class TaskListComponent implements OnInit {
  categories: String[];
  
  constructor(private taskService: TaskService) {
  }
  
  ngOnInit(): void {
    this.taskService.findAll().subscribe(data => {
      this.categories = data.map(task => task.category);
    });
  }
}
