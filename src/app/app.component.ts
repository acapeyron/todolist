import { Component } from '@angular/core';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: String[];
  
  constructor(private taskService: TaskService) {
  }
  
  ngOnInit(): void {
    this.taskService.findAll().subscribe(data => {
      const array = data.map(task => task.category);
      this.categories = array.filter((item, index) => array.indexOf(item) == index);
    });
  }
}
