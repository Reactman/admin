import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page-left',
  templateUrl: './page-left.component.html',
  styleUrls: ['./page-left.component.css']
})
export class PageLeftComponent implements OnInit {

  public leftSideBarHeight: number;

  @Input() public menuItems;

  public hoverElemHeight: number;

  public hoverElemTop: number;

  constructor(private ref: ElementRef) { }

  ngOnInit() {
    this.leftSideBarHeight = this.ref.nativeElement.parentNode.clientHeight - 60;
  }

  menuMouseOut() {
    this.hoverElemTop = -200;
  }

  onHover($event) {
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 50;
  }

  toggleSubMenu($event) {
    const target = $event.currentTarget;
    $event.menu.expand = !$event.menu.expand;
    $(target).next().slideToggle();
  }

}
