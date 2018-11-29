import { Component, ViewChild} from '@angular/core';
import { MapsProvider } from '../../providers/maps/maps';
import { NavController, Platform,LoadingController} from 'ionic-angular';
declare var google: any;
import { Geolocation } from '@ionic-native/geolocation';
import { signUp} from '../../app/GeoArray';
import geoArr from '../../app/GlobalGeo';
import firebase from 'firebase';
import { MoreInfoPage } from '../../pages/more-info/more-info';
@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {
  arry=[];
  pos={};
  address;
  lat;
  lng;

  @ViewChild("map") mapElement;
  map: any;
  
  coordinateObj: any;
  constructor(public loadingCtrl: LoadingController,private maps: MapsProvider,public navCtrl: NavController) { 
    console.log(this.coordinateObj);
    
  }

  ngOnInit(){
    this.maps.getGeolocation().then((data)=>{
      this.initMap(data); 
    })
    
  }

  // ionViewDidLoad(){
  //   this.lat = this.arry[0].lat;
  //   this.lng = this.arry[0].lng;
  //   console.log(this.lat +" / " + this.lng)
  // }

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
      console.log(keys);

     for (var i = 0; i < keys.length; i++) {
       var k = keys[i];
       let  obj = {
          name: infor[k].name,
          lat: infor[k].lat,
          lng: infor[k].lng,
          email:infor[k].email,
          phone:infor[k].phone,
          owner:infor[k].owner,
          tel:infor[k].tel
          }

        this.arry.push(obj);
        console.log(this.arry)

        this.lat = this.arry[i].lat;
        this.lng = this.arry[i].lng;
        console.log(this.lat + " / " + this.lng)
          
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
          return new Promise(()=>{
            geoArr.length = 0
            var geocoder = new google.maps.Geocoder;
            var latLng = new google.maps.LatLng(obj.lat,obj.lng);
            infowindow.open(this.map, marker);
            geocoder.geocode({ 'latLng': latLng }, function (results, status) {
        
                if (status === google.maps.GeocoderStatus.OK) {
                  var AreaName = results[0].formatted_address;
                  let areaAddress = AreaName.split(",");
                  this.streetName =areaAddress[0];
                  this.areaName = areaAddress[1];
                  this.areaLocation = areaAddress[2];
                  this.postCode = areaAddress[3];
        
                  console.log(AreaName)
                  console.log(areaAddress);
        
                  let obj = new signUp(this.streetName,this.areaName,this.areaLocation,this.postCode);
                  geoArr.push(obj)
                  console.log(geoArr)
                  
              }
              
                console.log(this.streetName + " " + this.areaName + " " + this.postCode + " " + this.country)
            })
            setTimeout(()=>{
              const loader = this.loadingCtrl.create({
                content: "Please wait...",
                duration: 1000
              });
              loader.present();
              this.navCtrl.push(MoreInfoPage,{obj:obj})
            },500)
            
          })
        });
      }
 
})    

  
this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)
    
      let marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,label:"my location",
        position: coords,
        animation: google.maps.Animation.BOUNCE,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
     
      })


  }

}
