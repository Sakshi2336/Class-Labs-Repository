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

  //Catch the onclick event from the html
  selectedStudent?: User;
  //function to set which student to display
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }
}
