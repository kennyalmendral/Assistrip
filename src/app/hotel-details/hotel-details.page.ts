import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.page.html',
  styleUrls: ['./hotel-details.page.scss'],
})
export class HotelDetailsPage implements OnInit {
	public hotelDetailsForm: FormGroup;

	constructor(
		private toastCtrl: ToastController,
		private formBuilder: FormBuilder,
		private dataService: DataService
	) {
		this.hotelDetailsForm = formBuilder.group({
			name: [''],
			address: [''],
			contactNumber: [''],
			roomNumber: [''],
			wifiPassword: [''],
			notes: ['']
		});
	}

	ngOnInit() {
		this.dataService.getHotelDetails().then(details => {
			let formControls: any = this.hotelDetailsForm.controls;

			if (details != null) {
				formControls.name.setValue(details.name);
				formControls.address.setValue(details.address);
				formControls.contactNumber.setValue(details.contactNumber);
				formControls.roomNumber.setValue(details.roomNumber);
				formControls.wifiPassword.setValue(details.wifiPassword);
				formControls.notes.setValue(details.notes);
			}
		});
	}

	saveForm(): void {
		this.dataService.setHotelDetails(this.hotelDetailsForm.value);
		this.presentToast('Hotel details has been updated successfully.');
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
