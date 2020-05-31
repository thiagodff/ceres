import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { InputErrorModule } from 'src/app/shared-components/input-error/input-error.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ReactiveFormsModule,
		InputErrorModule
	],
	declarations: [LoginPage]
})
export class LoginPageModule { }
