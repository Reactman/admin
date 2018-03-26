import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuItem;
  @Input() isMenuChildrend = false;

  @Output() itemHover = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  public onHover($event) {
    this.itemHover.emit($event);
  }

  onToggle($event, menuItem) {
    const target = $event.currentTarget;
    $(target).next().slideToggle();
    menuItem.expand = !menuItem.expand;
  }

}
