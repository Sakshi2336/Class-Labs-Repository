import { Component } from '@angular/core';
import {User} from "../Shared/Models/user";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf, NgForOf, StudentDetailComponent,],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {


  user1: User = {id: 1, firstName: "Diana", lastName: "Nano", department: "Programming", isAdmin: false};
  user2: User = {id: 2, firstName: "Matt", lastName: "Haug", department: "Web Dev", isAdmin: true};
  //Can declare values either way
  userList: User[] = //any[] would have worked as well
    [this.user1, this.user2,
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin: true}
    ]
  //Function that gets called from our onclick. Takes in an
  //argument ofa variable called user, which is type User and returns void
  toggleAdminStatus(user: User): void {
    user.isAdmin = !user.isAdmin;
  }
}
