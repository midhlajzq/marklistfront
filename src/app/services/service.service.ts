import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  BASE_URL = 'https://marklist.onrender.com'
  constructor(private http:HttpClient) { }
  // ALL students
getallstudents(){
  return this.http.get(`${this.BASE_URL}/students/all-students`)
}
// remove
removestudent(id:any){
  // api
  return this.http.delete(`${this.BASE_URL}/students/delete/${id}`)

}
// view student
viewstudent(id:any){
  // api
  return this.http.get(`${this.BASE_URL}/students/view-student/${id}`)

}
// add
addstudent(student:any){
  return this.http.post(`${this.BASE_URL}/students/add-student`,student)
}


// update
 updateStudent(id:any,student:any){
  return this.http.put(`${this.BASE_URL}/students/edit-student/${id}`,student)
 }
  
}
