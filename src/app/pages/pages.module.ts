import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PAGE_ROUTE } from './pages.route';
import { PagesComponent } from './pages.component';
import { PageTopComponent } from './theme/page-top/page-top.component';
import { PageLeftComponent } from './theme/page-left/page-left.component';
import { MenuComponent } from './theme/page-left/menu/menu.component';

import { SilmScrollDirective } from '../directives/scroll/silm-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(PAGE_ROUTE)
  ],
  declarations: [
    PagesComponent,
    PageTopComponent,
    PageLeftComponent,
    MenuComponent,
    SilmScrollDirective
  ]
})
export class PagesModule { }
