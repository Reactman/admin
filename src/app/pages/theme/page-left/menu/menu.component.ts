import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menuItem;
  @Input() isMenuChildrend = false;
  @Output() toggleSubMenu = new EventEmitter<any>();

  @Output() itemHover = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  public onHover($event) {
    this.itemHover.emit($event);
  }

  onToggleSubMenu($event, menu) {
    $event.menu = menu;
    this.toggleSubMenu.emit($event);
  }

}
