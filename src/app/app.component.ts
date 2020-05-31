import { Component, OnInit } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IUser } from './models/IUser';
import { UserService } from './services/user/user.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public selectedIndex = 0;
	public appPages = [{
		title: "Início",
		url: "/home",
		icon: "home",
		direction: "root"
	}];

	public informacoes: string[] = ["Dado 1", "Dado 2", "Dado 3", "Dado 4"];

	constructor (
		private menu: MenuController,
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private navCtrl: NavController,
		private userService: UserService
	) {
		this.initializeApp();
	}

	initializeApp () {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.statusBar.backgroundColorByHexString('#9D8B6E');
			this.statusBar.styleLightContent();

			this.splashScreen.hide();
		});
	}

	ngOnInit () {
		this.updateSelectedIdx();
	}

	ionWillOpen (): void {
		this.updateSelectedIdx();
	}

	get usuarioLogado (): IUser {
		return this.userService.user;
	}

	get isLoginPage (): boolean {
		return window.location.pathname.split('/')[1] === "login";
	}

	updateSelectedIdx (): void {
		const path = "/" + window.location.pathname.split('/')[1];
		this.selectedIndex = this.appPages.findIndex(page => page.url === path);
	}

	openInfo (info: string): void {
		this.navCtrl.navigateRoot(["informacoes"], {
			queryParams: { info }
		});

		this.menu.close();
	}

	logout (): void {
		this.userService.logout();
	}
}
