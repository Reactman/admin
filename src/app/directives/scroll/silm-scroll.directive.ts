import { Directive, ElementRef, OnChanges, Input } from '@angular/core';
import 'jquery-slimscroll';

@Directive({
  selector: '[silmScroll]'
})
export class SilmScrollDirective implements OnChanges {

  @Input() public slimScrollOptions: Object;

  constructor(private ref: ElementRef) {}

  ngOnChanges() {
    this.scroll();
  }

  private scroll() {
    $(this.ref.nativeElement).slimScroll(this.slimScrollOptions);
  }

}
