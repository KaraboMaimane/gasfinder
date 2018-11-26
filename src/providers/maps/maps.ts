import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
/*
  Generated class for the MapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapsProvider {
  geoposition: Geoposition;
  constructor(private platform: Platform,public http: HttpClient, private geolocation: Geolocation) {

  }
  
  async getGeolocation(){
    await this.platform.ready();

    try{
      return await this.geolocation.getCurrentPosition();
    }catch(e){
      console.log(e);
    }
  }

}
