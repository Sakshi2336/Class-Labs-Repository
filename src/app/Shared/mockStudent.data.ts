import {User} from "./Models/user";

//mockStudent.data.ts
//import our interface

//then we need to create a mock data array of type User and export it so it is available to otehr files

export const userList : User[] =[
    //Copied from app.component.ts
    {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false},
  {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true},
  {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
  {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
  ]

