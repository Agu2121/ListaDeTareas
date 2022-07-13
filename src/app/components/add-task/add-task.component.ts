import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../service/ui.service';
import { task } from '../../task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<task> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiService: UiService
  ) { 
    this.subscription = this.uiService.onToggle()
                              .subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length === 0) {
      alert("Por favor agrega el nombre de la tarea!");
      return
    }

    const {text, day, reminder} = this
    const newTask = {text,day,reminder}

    this.onAddTask.emit(newTask);
    
  }

}
