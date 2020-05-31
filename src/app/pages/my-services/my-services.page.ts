import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-my-services',
	templateUrl: './my-services.page.html',
	styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit {
	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);
	}

	ngOnInit () { }
}
