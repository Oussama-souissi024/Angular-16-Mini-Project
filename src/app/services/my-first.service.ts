import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];

  constructor() { 
    this.init();
  }

  init(): void{  
    this.Insert({
      name :'Oussama',
      email : 'Ouss@gmail.com',
      message : 'Hello Mr Ouss'   
    });
    this.Insert({
      name :'Khalil',
      email : 'Ar@gmail.com',
      message : 'Hello Mr Khalil'   
    });
    this.Insert({
      name :'Hamdi',
      email : 'HJ@gmail.com',
      message : 'Hello Mr Hamdi'   
    });
  }

  Insert(message: {name: string, email: string, message: string} ): void{
    this.messages.push(message);
  }

  GetAllMessages(){
    return this.messages;
  }

  DeleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
