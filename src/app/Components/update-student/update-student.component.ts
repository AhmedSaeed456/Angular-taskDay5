import { Component,OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styles: [
  ]
})
export class UpdateStudentComponent implements OnInit {
  ID: any;
  studentInfo: any;
  constructor(ActivatedStudent: ActivatedRoute,private myService: StudentsService) {
    this.ID = ActivatedStudent.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.getStudentById(this.ID).subscribe({
      next: (data) => {
        this.studentInfo = data;
        },
        error:(err)=>{}
      })
  }
  Update(name: any, age: any, email: any, phone: any, courses: any) {
    let newStudent = { name, age, email, phone, courses }

    this.myService.updateStudentById(this.ID, newStudent).subscribe()
  }
}
