import { Component,OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit {
  constructor(private myService: StudentsService) { }
  students: any;
  //Call API [OnInit]
  ngOnInit(): void {
    this.myService.getAllStudents().subscribe(
      {
        next: (data) => {
          this.students = data;
      },
      error: (err) => { }
    }
    )
  }


}
