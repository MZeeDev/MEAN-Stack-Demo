import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from './config';
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class TagService {
	constructor(private http: HttpClient, private router: Router) {}

	public getTags() {
		try {
			let response = this.http.get(`${Config.API_BASE}/get/tags`).toPromise();
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	public getTagsBySupplier(supplier) {
		try {
			let response = this.http.get(`${Config.API_BASE}/get/tags/${supplier}`).toPromise();
			return response;
		} catch (error) {
			console.log(error);
		}
	}
}
