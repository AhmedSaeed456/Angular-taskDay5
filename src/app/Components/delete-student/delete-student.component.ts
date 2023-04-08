import { Component,OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styles: [
  ]
})
export class DeleteStudentComponent implements OnInit{
  ID: any;
  constructor(private myActicated: ActivatedRoute,private myService: StudentsService) {
    this.ID = myActicated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.deleteStudentById(this.ID).subscribe();
  }

}
