import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { IPlanta } from 'src/app/models/IPlanta';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-planting',
	templateUrl: './planting.page.html',
	styleUrls: ['./planting.page.scss'],
})
export class PlantingPage implements OnInit {
	public plantas: Array<IPlanta>;

	constructor (
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.plantas = [{
			img: "assets/imgs/tomate_cereja.jpg",
			nome: "Tomate Cereja",
			descricao: "Excelente para plantar em vasos pequenos."
		}, {
			img: "assets/imgs/hortela.jpeg",
			nome: "Hortelã",
			descricao: "Erva de aroma único e acrescenta uma mistura de frescor aos pratos."
		}, {
			img: "assets/imgs/alface.png",
			nome: "Alface",
			descricao: "A alface é uma das folhas mais fáceis de se plantar dentro de casa."
		}, {
			img: "assets/imgs/arroz.png",
			nome: "Arroz",
			descricao: "O arroz faz parte de quase todo prato brasileiro."
		}, {
			img: "assets/imgs/cafe.png",
			nome: "Café",
			descricao: "Necessita de umidade e luz constante."
		}]
	}

	ngOnInit () { }

	tutorial (planta: IPlanta) {
		this.navCtrl.navigateForward(["tutorial"], { state: planta });
	}
}
