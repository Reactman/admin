import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PAGE_ROUTE } from './pages.route';
import { PagesComponent } from './pages.component';
import { PageTopComponent } from './theme/page-top/page-top.component';
import { PageLeftComponent } from './theme/page-left/page-left.component';
import { MenuComponent } from './theme/page-left/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PAGE_ROUTE)
  ],
  declarations: [
    PagesComponent,
    PageTopComponent,
    PageLeftComponent,
    MenuComponent
  ]
})
export class PagesModule { }
