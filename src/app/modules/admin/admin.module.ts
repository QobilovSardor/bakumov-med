import { NgModule } from "@angular/core";
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";

const routes: Routes = [
	{
		path: '',
		component: AdminListComponent
	}
]

@NgModule({
	declarations: [
		AdminDetailsComponent,
		AdminListComponent,
	],
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		CommonModule
	]
})

export class AdminModule { }