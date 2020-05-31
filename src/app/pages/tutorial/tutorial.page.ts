import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-tutorial',
	templateUrl: './tutorial.page.html',
	styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
	public title: string;

	constructor (private activatedRoute: ActivatedRoute) {
		this.title = this.activatedRoute.snapshot.queryParams["title"];
	}

	ngOnInit () { }
}
