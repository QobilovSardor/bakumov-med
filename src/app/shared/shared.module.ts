import { NgModule } from "@angular/core";
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		NzTableModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [
		NzTableModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class SharedModule { }