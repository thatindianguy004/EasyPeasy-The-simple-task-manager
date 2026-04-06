import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required : true}) userId!: string | undefined ;
  @Input({required : true}) name: string | undefined;
  isAddingTask = false;
  searchQuery = '';
  constructor(private tasksService : TaskService){}
get selectedUserTasks(){
  const query = this.searchQuery.toLowerCase().trim();
  const tasks = this.tasksService.getuserTask(this.userId!);
  if(!query){
    return tasks;
  }
  return tasks.filter(task =>
    task.title.toLowerCase().includes(query) ||
    task.summary.toLowerCase().includes(query)
  );
}
onCompleteTask(id:string){
  this.tasksService.completeTask(id);
}
onStartAddTask(){
  this.isAddingTask = true;
}
onCloseAddTask(){
  this.isAddingTask = false;
}
onAddTask(taskData : NewTaskData){
  this.isAddingTask = false;
}
}
