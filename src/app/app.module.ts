import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderComponent } from './Components/header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { StudentItemComponent } from './Components/student-item/student-item.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent,
    HeaderComponent,
    AddStudentComponent,
    StudentItemComponent,
    UpdateStudentComponent,
    DeleteStudentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
