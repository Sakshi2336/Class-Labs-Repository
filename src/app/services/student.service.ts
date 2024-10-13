import { Injectable } from '@angular/core';  //This decorator allows Angular to inject this service into other components or services.
import {User} from "../Shared/Models/user";
import {userList} from "../Shared/mockStudent.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //i need a local copy of the user list now

  private students:User[] = userList;

  constructor() { }

  getStudents():Observable<User[]>{
    return of(userList); //this is returning an observable as it comes in
    //At the end of today we will add at CRUD operations for the rest of our service
  }

  //Adding basic CRUD methods
  //Create : add user
  addStudent(newStudent:User) : Observable<User[]>{
    this.students.push(newStudent)
    return of (this.students);
  }

  //Update an existing user
  updateStudent(updatedStudent:User) : Observable<User[]>{
    const index = this.students.findIndex(user=>user.id === updatedStudent.id)
    if(index !== -1){
      this.students[index] = updatedStudent;
    }

    return of (this.students);
  }


  //delete remove an user by id
  deleteStudent(studentId:number):Observable<User[]>{
    this.students = this.students.filter(user=>user.id !== studentId);
    return of (this.students);
  }

  //get student by id
  getStudentById(studentId: number): Observable<User | undefined> {
    const student = this.students.find(user => user.id === studentId);
    return of(student);
  }
}
