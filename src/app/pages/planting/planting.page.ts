import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-planting',
	templateUrl: './planting.page.html',
	styleUrls: ['./planting.page.scss'],
})
export class PlantingPage implements OnInit {
	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);
	}

	tutorial() {
		this.navCtrl.navigateRoot(["tutorial"]);
	}

	ngOnInit () { }
}
