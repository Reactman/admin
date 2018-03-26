import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../../mock-data/menu';

@Component({
  selector: 'app-page-left',
  templateUrl: './page-left.component.html',
  styleUrls: ['./page-left.component.css']
})
export class PageLeftComponent implements OnInit {

  public menuIList;

  public hoverElemHeight: number;

  public hoverElemTop: number;

  constructor() { }

  ngOnInit() {
    this.menuIList = MenuItem;
  }

  menuMouseOut() {
    this.hoverElemTop = -200;
  }

  onHover($event) {
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 50;
  }

}
