import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-market',
	templateUrl: './market.page.html',
	styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
	public produtos: Array<{ img: string, nome: string, preco: number }>;

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.produtos = [
			{ img: "assets/imgs/grains_icon_white.png", nome: "Trigo", preco: 6.5 },
			{ img: "assets/imgs/macarrao_icon_white.png", nome: "Macarrão", preco: 3 },
			{ img: "assets/imgs/beef_white_png.png", nome: "Bisteca", preco: 12.9 },
			{ img: "assets/imgs/egg-icon-png-white.png", nome: "Ovos", preco: 4.5 }
		];
	}

	ngOnInit () { }

	search (value: string): void {
		console.log(value);
	}
}
