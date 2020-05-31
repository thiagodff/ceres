import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { IPlanta } from 'src/app/models/IPlanta';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-tutorial',
	templateUrl: './tutorial.page.html',
	styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
	public planta: IPlanta;

	constructor (
		private router: Router,
		private navCtrl: NavController,
		private user: UserService
	) {
		if (!this.user.isLogged())
			this.navCtrl.navigateRoot(["/login"]);

		this.planta = this.router.getCurrentNavigation().extras.state as IPlanta;
	}

	ngOnInit () { }
}
