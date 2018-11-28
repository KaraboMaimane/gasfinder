import { Component, ViewChild} from '@angular/core';
import { MapsProvider } from '../../providers/maps/maps';
declare var google: any;
import { Geolocation } from '@ionic-native/geolocation';
import firebase from 'firebase';
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  arry=[];
  pos={};
  address;

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
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //r
    firebase.database().ref('users/').on('value', data=>{
      let infor = data.val();
      let arry=[]
      let keys = Object.keys(infor);

     for (var i = 0; i < keys.length; i++) {
       var k = keys[i];
       let  obj = {
          name: infor[k].name,
          lat: infor[k].lat,
          lng: infor[k].lng
          }

       

        this. arry.push(obj);

        
        // let markera: google.maps.Marker = new google.maps.Marker({
        //   map: this.map,label:"bararararararar",
        //   position: {lat:-26.2651693, lng:27.97542109999995}
        // })

       var marker = new google.maps.Marker({position:
        {lat:this.arry[i].lat, lng:this.arry[i].lng}
        ,map:this.map,
        label:this.arry[i].name,},
          );

          var infowindow = new google.maps.InfoWindow({
            content:obj.name
              });


        marker.addListener('click', () =>{
            console.log(this.arry);
            console.log("lat:-26.2651693, lng:27.97542109999995");
            infowindow.open(this.map, marker);
      // this.navCtrl.push(InformationPage, {obj:obj});
      
    });
}
 
})
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
    
      let marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,label:"my location",
        position: coords,
        animation: google.maps.Animation.BOUNCE,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
     
      })

      

  }

}
