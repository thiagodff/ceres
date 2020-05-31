import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import * as sha512 from 'js-sha512';

import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
	selector: 'page-login',
	templateUrl: 'login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage {
	public submitAttempt: boolean = false;
	public loginForm: FormGroup;

	constructor (
		private navCtrl: NavController,
		private formBuilder: FormBuilder,
		private authService: AuthenticationService,
		private userService: UserService,
		private utilsService: UtilsService
	) {
		this.loginForm = this.formBuilder.group({
			email: ["", Validators.compose([Validators.email, Validators.required])],
			senha: ["", Validators.required]
		});

		// Se já estiver logado, mostra tela inicial
		if (this.userService.user)
			this.navCtrl.navigateRoot(["home"]);
	}

	async login (): Promise<void> {
		this.submitAttempt = true;
		if (!this.loginForm.valid)
			return this.utilsService.alert("Falha de Login", "Por favor, preencha todos os campos corretamente!");

		const loading = await this.utilsService.presentLoading();

		let email = this.loginForm.get("email").value;
		let password = sha512.sha512(this.loginForm.get("senha").value);

		setTimeout(() => {
			this.authService.authenticate(email, password);
			loading.dismiss();
			this.navCtrl.navigateRoot(["home"]);
		}, 1000);
	}
}
