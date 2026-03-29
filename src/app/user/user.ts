import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Card } from "../shared/card/card";
@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required : true}) selected !: boolean;
  @Input({required : true}) user !: {
    id : string;
    avatar: string;
    name: string;
  };
  @Output() select = new EventEmitter(); 
  
  get imagePath(){
    return './assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);

  }
}
