import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const router: Routes=[
  {
    path: '',
    component: LayoutComponent
  }
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),

    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule,

  ]
})
export class LayoutModule { }
