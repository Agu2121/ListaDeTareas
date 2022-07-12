import { Component, OnInit, Input } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css']
})
export class TasksItemsComponent implements OnInit {
  @Input() task: task = TASKS[0];
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
