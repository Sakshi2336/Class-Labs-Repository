import { Injectable } from '@angular/core';
import {User} from "../Shared/Models/user";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  userList: User[] = [ //Copied from app.component.ts
    {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
    {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
    {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
    {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
  ];
}
