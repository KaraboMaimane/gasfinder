import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google: any;
import { Geolocation } from '@ionic-native/geolocation';
import firebase from 'firebase';
import { MapsProvider } from '../../providers/maps/maps';


@IonicPage()

@Component({
  selector: 'page-more-info',
  templateUrl: 'more-info.html',
})
export class MoreInfoPage {

  map:any;
  more = 'info';
  companyInfor;
  businessName;
  businessAddress;
  businessPhone;
  businessEmail;
  businessTel;
  businessOwner;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private maps: MapsProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreInfoPage');

    this.companyInfor=this.navParams.get("obj");
    console.log(this.companyInfor);
    let lat = this.companyInfor.lat;
    let lng = this.companyInfor.lng;
   this.businessName = this.companyInfor.name;
    this.businessEmail= this.companyInfor.email;
    this.businessPhone = this.companyInfor.phone;
    this.businessTel = this.companyInfor.tel;
    this.businessOwner= this.companyInfor.owner;
    console.log(this.businessTel);




    this.initMap(lat,lng);

  }

  initMap(lat,lng){
   
    let mapOptions: google.maps.MapOptions = {
      center: {lat:123,lng:3453},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
   // this.map = new google.maps.Map(mapOptions);

  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });

  console.log(this.map);

  }

}
