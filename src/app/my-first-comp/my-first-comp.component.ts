import { Component } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent {
  name: string = 'Oussama';
  email: string = 'Oussama@gmail.com';
  message: string = 'Hello';
  IsSubmitted: boolean = false;
  messages: Array<{ name: string; email: string; message: string }> = [];

  constructor(private service: MyFirstService) {
    this.messages = this.service.GetAllMessages();
  }

  onSubmit(): void {
    console.log(this.name);
    console.log(this.messages);
  }

  onSubmit2(): void {
    this.service.Insert({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

  DeleteMessage(index: number): void {
    this.service.DeleteMessage(index);
    this.messages = this.service.GetAllMessages(); // Refresh the list
  }

  validsubmit(): void {
    this.IsSubmitted = true;
  }
}
