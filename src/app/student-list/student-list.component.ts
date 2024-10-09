import {Component, OnInit} from '@angular/core';
import {User} from "../Shared/Models/user";
import {StudentDetailComponent} from "../student-detail/student-detail.component";
import {NgForOf} from "@angular/common";
import {StudentService} from "../services/student.service";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgForOf, NgForOf, StudentDetailComponent, RouterLink,],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  //I still want a local copy of the user list
  userList:User[] = [];

  constructor(private studentService : StudentService) { //this is like we are just calling our services
    //this is going to be used for dependency injection
  }

  ngOnInit() {
    //this life cycle hook is a good place to fetch init our data
    this.studentService.getStudents().subscribe({
      next:(data:User[]) => this.userList = data, //data is just variable name here
      error:err=>console.error("Error fetching students:",err),
      complete:() => console.log("Student data fetch complete successfull!")
    })

  }

  //Catch the onclick event from the html
  selectedStudent?: User;
  //function to set which student to display
  selectStudent(student: User): void {
    this.selectedStudent = student;
  }
}
