import { Component, ViewChild} from '@angular/core';
import { MapsProvider } from '../../providers/maps/maps';
declare var google: any;
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;

  coordinateObj: any;
  constructor(private maps: MapsProvider) { 
    console.log(this.coordinateObj);
  }

  ngOnInit(){
    this.maps.getGeolocation().then((data)=>{
      this.initMap(data); 
    })
    
  }

  initMap(data){
    console.log(data.coords.latitude);
    let coords = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    for(let i = 0; i < 10; i++){
      let marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,
        position: coords
      })
    }

  }

}
