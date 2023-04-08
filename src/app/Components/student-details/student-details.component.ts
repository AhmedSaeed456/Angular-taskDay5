import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { StudentsService } from 'src/app/Services/students.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {
  ID: any;
  studentInfo: any;
  constructor(ActivatedStudent: ActivatedRoute,private myService:StudentsService) {
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
}


/**
 * 1- get id ==> ActivatedRoute
 * 2- fetch api with this ID
 * 3- Fetch at the start[OnInit]
 */
