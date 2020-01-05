import { Component, OnInit } from '@angular/core';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
	year: any;

	constructor(
		private socialSharing: SocialSharing
	) {
		this.year = new Date().getFullYear();
	}

  ngOnInit() {
  }

	share() {
		this.socialSharing.share("A utility app designed to help you in your trips.", 'Your trip assistant is here!', null, 'https://play.google.com/store/apps/details?id=io.github.kennyalmendral.assistrip').then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error);
		});
	}
}
