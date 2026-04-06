import { Injectable } from "@angular/core";
import { type TaskData, type NewTaskData } from "./task/task.model";
@Injectable({providedIn: 'root'})
 export class TaskService{
    private tasks: TaskData[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
    completed: false,
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
    completed: false,
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
    completed: false,
  },
  ];
  constructor(){
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }
getuserTask(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
}
addTask(taskData : NewTaskData, userId : string){
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate:taskData.date,
        completed: false,
    })
    this.saveTasks();
}
completeTask(id: string){
    const task = this.tasks.find((task) => task.id === id);
    if(task){
      task.completed = true;
      this.saveTasks();
    }
}
private saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(this.tasks));
}
}