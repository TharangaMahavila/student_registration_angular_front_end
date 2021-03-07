import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CourseService} from '../../service/course.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseName = '';
  courseDuration = '';
  @ViewChild('txtCourseName')
  txtCourseName!: ElementRef;

  constructor(private courseService: CourseService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  saveNewCourse(): void{
    this.courseService.saveNewCourse(this.courseName, this.courseDuration).subscribe(value => {
      this.courseName = '';
      this.courseDuration = '';
      (this.txtCourseName.nativeElement as HTMLInputElement).focus();
      this.snackbar.open('Successfully Saved the course','Success',{
        duration: 2000
      });
    }, error => {
      (this.txtCourseName.nativeElement as HTMLInputElement).focus();
      this.snackbar.open('Something went wrong','Dismiss',{
        duration: 2000
      });
    });
  }

}
