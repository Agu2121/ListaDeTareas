import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { task } from '../../task';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {
  @Input() task: task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: task){
    this.onToggleReminder.emit(task);
  }
}
