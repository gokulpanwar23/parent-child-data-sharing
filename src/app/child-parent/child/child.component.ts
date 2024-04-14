import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() childData!: string;
  @Input() userData!: User;

  @Output() confirmationMesssage: EventEmitter<string> = new EventEmitter();

  sendConfirmation() {
    this.confirmationMesssage.emit('Data received to child');
  }
}

