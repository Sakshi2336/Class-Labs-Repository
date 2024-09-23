import { Injectable } from '@angular/core';
import {User} from "../Shared/Models/user";
import {userList} from "../Shared/mockStudent.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //i needa local copy of the user list now

  private students:User[] = userList;

  constructor() { }

  getStudents():Observable<User[]>{
    return of(userList); //this is returning an observable as it comes in

    //At the end of today we will add at CRUD operations for the rest of our service

  }
}
