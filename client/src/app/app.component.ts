import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TagService } from './tag.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	title = 'client';
	public allTags = [];
	constructor(private tagService: TagService) {}
	ngOnInit() {
		this.getAllTags();
	}

	async getAllTags() {
		try {
			let response = await this.tagService.getTags();
			this.allTags = <any>response;
			console.log(this.allTags);
		} catch (error) {
			console.log(error);
		}
	}
	async onSubmitForm(f: NgForm) {
		console.log(f.value);
		let supplier = f.value['supplier'];
		let response = await this.tagService.getTagsBySupplier(supplier);
		this.allTags = <any>response;
		return;
	}
}
