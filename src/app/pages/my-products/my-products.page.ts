import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-my-products',
	templateUrl: './my-products.page.html',
	styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {
	public produtos: Array<{ img: string, nome: string }>;

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.produtos = [
			{ img: "assets/imgs/grains_icon_white.png", nome: "Trigo" },
			{ img: "assets/imgs/egg-icon-png-white.png", nome: "Ovos" }
		];
	}

	ngOnInit () { }

	search (value: string): void {
		console.log(value);
	}
}
