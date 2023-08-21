import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Task Tracker';

  //Gets called from the event emitter in button class
  toggleAddTask() {
    console.log('task added');
  }
}
