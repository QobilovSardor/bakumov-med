import { NgModule } from "@angular/core";
import { ArticleListComponent } from './component/article-list/article-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { Routes } from '@angular/router';

@NgModule({
	declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ],
	imports: []
})

export class ArticleModule { }