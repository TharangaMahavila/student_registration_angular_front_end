import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';
import {NgForm, NgModel} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  hide: any = true;
  username = '';
  password = '';
  @ViewChild('txtUsername')
  txtUsername!: ElementRef;
  @ViewChild('frmLogin')
  frmLogin!: NgForm;

  constructor(private userService: UserService, private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  authenticate(): void {
    this.userService.authenticate(this.username, this.password).subscribe(token => {
      sessionStorage.setItem(`token`, token);
      sessionStorage.setItem(`uname`, this.username);
      this.router.navigateByUrl('/main-menu');
    }, error => {
      this.snackBar.open('Invalid username and password','Dismiss',{
        duration: 2000
      });
      this.username = '';
      this.password = '';
      this.frmLogin.reset();
      (this.txtUsername.nativeElement as HTMLInputElement).focus();
    });
  }
}
