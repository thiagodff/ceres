import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class UtilsService {
	constructor (
		private alertController: AlertController,
		private loadingController: LoadingController,
		private toastController: ToastController
	) {}

	handleHttpError (title: string, defaultMsg: string = "Sem conexão com o servidor!", loading: HTMLIonLoadingElement = null): (httpError?: HttpErrorResponse) => Promise<void> {
		return async (httpError: HttpErrorResponse = null) => {
			if (loading)
				loading.dismiss();

			console.log("ERROR:", httpError);
			this.alert(title, httpError && httpError.error && httpError.error.message ? httpError.error.message : defaultMsg);
		};
	}

	prompt (title: string, msg: string, cancelBtn: string = "Cancelar"): Promise<boolean> {
		return new Promise<boolean>(async (resolve, reject) => {
			(await this.alertController.create({
				header: title,
				message: msg,
				buttons: [{
					text: cancelBtn,
					role: "cancel",
					handler: _ => {
						resolve(false);
					}
				}, {
					text: "Sim",
					role: "confirm",
					handler: _ => {
						resolve(true);
					}
				}]
			})).present();
		});
	}

	async alert (title: string, msg: string): Promise<void> {
		(await this.alertController.create({
			header: title,
			message: msg,
			buttons: [{ text: "OK" }]
		})).present();
	}

	async toast (message: string, duration: number = 2500): Promise<void> {
		(await this.toastController.create({
			message: message,
			duration: duration
		})).present();
	}

	async presentLoading (message: string = "Por favor, aguarde..."): Promise<HTMLIonLoadingElement> {
		const loading = await this.loadingController.create({ message });

		loading.present();
		return loading;
	}
}
