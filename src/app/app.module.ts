import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
	declarations: [
		AppComponent
	],
  entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		IonicStorageModule.forRoot(),
		AppRoutingModule
	],
  providers: [
		SocialSharing,
		{
			provide: RouteReuseStrategy,
			useClass: IonicRouteStrategy
		}
  ],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
