import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-my-details',
	templateUrl: './my-details.page.html',
	styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {
	public myDetailsForm: FormGroup;

	constructor(
		private toastCtrl: ToastController,
		private formBuilder: FormBuilder,
		private dataService: DataService
	) {
		this.myDetailsForm = formBuilder.group({
			name: [''],
			email: [''],
			contactNumber: [''],
			address: [''],
			notes: ['']
		});
	}

	ngOnInit() {
		this.dataService.getMyDetails().then(details => {
			let formControls: any = this.myDetailsForm.controls;

			if (details != null) {
				formControls.name.setValue(details.name);
				formControls.email.setValue(details.email);
				formControls.contactNumber.setValue(details.contactNumber);
				formControls.address.setValue(details.address);
				formControls.notes.setValue(details.notes);
			}
		});
	}

	saveForm(): void {
		this.dataService.setMyDetails(this.myDetailsForm.value);
		this.presentToast('Your details has been updated successfully.');
	}

	presentToast(toastMessage) {
		let toast = this.toastCtrl.create({
			message: toastMessage,
			duration: 2000
		}).then(toast => {
			toast.present();
		});
	}
}
