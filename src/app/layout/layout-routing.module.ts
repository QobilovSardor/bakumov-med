import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'admin',
				loadChildren: () => import('../modules').then((m) => m.AdminModule)
			},
			{
				path: 'article',
				loadChildren: () => import('../modules').then((m) => m.ArticleModule)
			}
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class LayoutRoutingModule { }