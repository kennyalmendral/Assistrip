import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HotelDetailsPage } from './hotel-details.page';

const routes: Routes = [
	{
		path: '',
		component: HotelDetailsPage
	}
];

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		IonicModule,
		RouterModule.forChild(routes)
	],
	declarations: [HotelDetailsPage]
})
export class HotelDetailsPageModule {}
