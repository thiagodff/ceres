import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-my-services',
	templateUrl: './my-services.page.html',
	styleUrls: ['./my-services.page.scss'],
})
export class MyServicesPage implements OnInit {
	public servicos: Array<{ img: string, nome: string }>;

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.servicos = [
			{ img: "assets/imgs/plantio_white.png", nome: "Plantio" },
			{ img: "assets/imgs/sementes_icon_white.png", nome: "Sementes" }
		];
	}

	ngOnInit () { }

	search (value: string): void {
		console.log(value);
	}
}
