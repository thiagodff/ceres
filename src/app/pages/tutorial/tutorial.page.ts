import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-tutorial',
	templateUrl: './tutorial.page.html',
	styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
	public title: string;

	constructor (
		private activatedRoute: ActivatedRoute,
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.title = this.activatedRoute.snapshot.queryParams["title"];
	}

	ngOnInit () { }
}
