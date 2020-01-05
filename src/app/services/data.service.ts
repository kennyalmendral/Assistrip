import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storage: Storage) {}

	setMyDetails(data): void {
		this.storage.set('my_details', data);
	}

	setHotelDetails(data): void {
		this.storage.set('hotel_details', data);
	}

	setLocation(data): void {
		this.storage.set('location', data);
	}

	getMyDetails(): Promise<any> {
		return this.storage.get('my_details');
	}

	getHotelDetails(): Promise<any> {
		return this.storage.get('hotel_details');
	}

	getLocation(): Promise<any> {
		return this.storage.get('location');
	}
}
