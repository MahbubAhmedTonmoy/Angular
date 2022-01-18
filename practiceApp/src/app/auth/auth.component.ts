import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Url } from 'url';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode : boolean = false;
  currentPage : string  = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPage = this.router.url;
    if(this.currentPage === '/login'){
      this.isLoginMode = true;
    }
  }

}
