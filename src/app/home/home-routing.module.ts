import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
	{
		path: 'tabs',
		component: HomePage,
		children: [
			{
				path: 'location',
				children: [
					{
						path: '',
						loadChildren: '../location/location.module#LocationPageModule'
					}
				]
			},
			{
				path: 'hotel',
				children: [
					{
						path: '',
						loadChildren: '../hotel-details/hotel-details.module#HotelDetailsPageModule'
					}
				]
			},
			{
				path: 'me',
				children: [
					{
						path: '',
						loadChildren: '../my-details/my-details.module#MyDetailsPageModule'
					}
				]
			},
			{
				path: 'about',
				children: [
					{
						path: '',
						loadChildren: '../about/about.module#AboutPageModule'
					}
				]
			}
		]
	},
	{
		path: '',
		redirectTo: '/tabs/location',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class HomePageRoutingModule {}
