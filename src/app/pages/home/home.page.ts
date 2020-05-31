import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public alimentos: Array<{ img: string, nome: string }>;
	public servicos: Array<{ img: string, nome: string }>;

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.alimentos = [
			{ img: "assets/imgs/grains_icon_white.png", nome: "Grãos" },
			{ img: "assets/imgs/macarrao_icon_white.png", nome: "Massas" },
			{ img: "assets/imgs/beef_white_png.png", nome: "Carnes" }
		];

		this.servicos = [
			{ img: "assets/imgs/plantio_white.png", nome: "Plantio" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Sementes" },
			{ img: "assets/imgs/equipamentos_icon_png.png", nome: "Equipamentos" }
		];
	}

	ngOnInit () { }
}
