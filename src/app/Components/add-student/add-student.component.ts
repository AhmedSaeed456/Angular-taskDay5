import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles: [
  ]
})
export class AddStudentComponent {
  coursesArr: any;
  constructor(private myService: StudentsService) {

  }
  Add(name:any, age:any, email:any, phone:any, courses:any) {
      //services==>addNewStudent().subscribe()
    this.coursesArr = courses.split(',');
    let newStudent = {name,age,email,phone,courses: this.coursesArr}
    this.myService.addNewStudent(newStudent).subscribe();
  }
}
