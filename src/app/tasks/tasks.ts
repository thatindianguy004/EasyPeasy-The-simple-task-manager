import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required : true}) userId!: string | undefined ;
  @Input({required : true}) name: string | undefined;
  isAddingTask = false;
  constructor(private tasksService : TaskService){}
get selectedUserTasks(){
  return this.tasksService.getuserTask(this.userId!);
}
onCompleteTask(id:string){
  this.tasksService.removeTask(id);
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


