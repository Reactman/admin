import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }

  login() {
    this.toast.info('test msg');
    // this.router.navigateByUrl('pages');
  }

}
