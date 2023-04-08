import { Component,OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styles: [
  ]
})
export class UpdateStudentComponent implements OnInit {
  ID: any;
  studentInfo: any;
  coursesArr: any;
  constructor(ActivatedStudent: ActivatedRoute,private myService: StudentsService,private router:Router) {
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
    this.coursesArr = courses.split(',');
    let newStudent = { name, age, email, phone, courses:this.coursesArr }

    this.myService.updateStudentById(this.ID, newStudent).subscribe(
      () => {
        this.router.navigate(['/students']);
      }
    )
  }
}
