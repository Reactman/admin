import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public menuItems: any;

  public leftSideBarHeight: number;

  constructor(
    private ref: ElementRef,
    private http: HttpClient
   ) {}

  ngOnInit() {
    this._getUserMenu();
  }

  private async _getUserMenu() {
    const self = this;
    await this.http.get('/api/menu')
    .subscribe(
      data => {
        self.menuItems = data;
      },
      error => {
        console.error('catch error on request uri \'/api/menu\' with method GET ', error);
      },
    );
  }

}
