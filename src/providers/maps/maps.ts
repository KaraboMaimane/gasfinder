import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
declare var google;

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

  retrieveMap(mapElement,mapOptions){
    return new google.maps.Map(mapElement.nativeElement, mapOptions);
  }

  
}
