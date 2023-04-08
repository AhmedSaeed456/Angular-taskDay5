import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//HttpClient [Get-Post-Put-Patch]
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private myClient: HttpClient) { }
  // private URL = "https://jsonplaceholder.typicode.com/users";//API
  private URL = "http://localhost:3000/students";//API

  getAllStudents() {
    return this.myClient.get(this.URL);
  }
  getStudentById(id:any) {
    return this.myClient.get(this.URL+'/'+id);
  }
  addNewStudent(student:any) {
    return this.myClient.post(this.URL,student);
  }

  updateStudentById(id:any,student:any) {
    return this.myClient.put(this.URL+'/'+id,student);
  }
  deleteStudentById(id:any) {
    return this.myClient.delete(this.URL+'/'+id);
  }

}
