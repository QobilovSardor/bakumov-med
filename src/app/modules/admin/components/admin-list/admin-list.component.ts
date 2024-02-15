import { Component, Injectable } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { IAdmin } from 'src/app/interface/admin';

@Component({
	selector: 'app-admin-list',
	templateUrl: './admin-list.component.html',
	styleUrls: ['./admin-list.component.css']
})



export class AdminListComponent {

	admin!: IAdmin[]

	constructor(private _service: AdminService) {
		this._service.getAll().subscribe(admin => this.admin = admin);
	}

}
