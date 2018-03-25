import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PAGE_ROUTE } from './pages.route';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PAGE_ROUTE)
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
