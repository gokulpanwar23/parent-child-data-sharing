import { Component } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name: string = 'John Doe';
  age: number = 10;

  user: User = { name: this.name, age: this.age };;

  message: string = '';
  dataReceivedFromChild($event: string) {
    this.message = $event;
  }

  updateValue() {
    this.user = { name: this.name, age: this.age };
    this.message = '';
  }
}
