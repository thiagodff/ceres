import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-my-products',
	templateUrl: './my-products.page.html',
	styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {
	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);
	}

	ngOnInit () { }
}
