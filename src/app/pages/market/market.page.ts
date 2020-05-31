import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-market',
	templateUrl: './market.page.html',
	styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);
	}

	ngOnInit () { }
}
