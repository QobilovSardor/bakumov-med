import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAdmin } from "src/app/interface/admin";

@Injectable({
	providedIn: 'root'
})

export class AdminService {

	url: string = 'http://91.200.151.163:3001/api'

	constructor(private http: HttpClient) { }

	authorization() {
		return {
			headers: {
				"Authorization":
					`Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZTk0ZDhiOC04YzI3LTQ3MTMtYjEyYy0wZmRkZWY5NzFhZDUiLCJlbWFpbCI6ImlzbG9tQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbImFkbWluX3ZpZXciLCJhZG1pbl9kZWxldGUiLCJhZG1pbl91cGRhdGUiLCJyb2xlX3ZpZXciLCJyb2xlX2RlbGV0ZSIsInByb21vX3ZpZXciLCJyb2xlX3VwZGF0ZSIsInByb21vX2RlbGV0ZSIsInByb21vX3VwZGF0ZSIsImRhdGFfdmlldyIsImRhdGFfZGVsZXRlIiwiZGF0YV91cGRhdGUiLCJjbGllbnRfdmlldyIsImNsaWVudF91cGRhdGUiLCJwcm9maWxlX3ZpZXciLCJvcmRlcl92aWV3IiwiZGF0YV9jcmVhdGUiLCJyb2xlX2NyZWF0ZSIsInByb21vX2NyZWF0ZSIsImFkbWluX2NyZWF0ZSJdLCJpYXQiOjE3MDc5MTQzMzMsImV4cCI6MTcwODAwMDczM30.6XFi-800VsYtrMmob1yw8nJGnshoKVLnlFehH8N1RD0"}`
			},
		}
	}

	getAll() {
		return this.http.get<IAdmin[]>(`${this.url}/admin`, this.authorization())
	}

}