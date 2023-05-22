import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  messages: string[] = [];
  add(message: sring) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];

  }

}
