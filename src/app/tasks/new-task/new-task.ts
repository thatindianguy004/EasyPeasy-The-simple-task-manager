import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  enteredTitle ='';
  enteredSummary = '';
  enteredDate ='';
  private tasksService = inject(TaskService)
  @Input({required :true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() Submit = new EventEmitter<NewTaskData>();
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask(
      {title : this.enteredTitle,
      summary: this.enteredSummary,
      date:this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
