import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
declare var google: any;
import { Geolocation } from '@ionic-native/geolocation';
import firebase from 'firebase';
import { MapsProvider } from '../../providers/maps/maps';
import { signUp} from '../../app/GeoArray';
import geoArr from '../../app/GlobalGeo';
import { HomePage } from '../home/home';


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
  streetName2;
  areaName2;
  areaLocation2;
  postCode2;

  geoArr2 = []
  geoArr = this.geoArr2;
  
  constructor(public loadingCtrl: LoadingController,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,private maps: MapsProvider) {

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MoreInfoPage');
  //   const loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present();
  //   this.companyInfor=this.navParams.get("obj");

  //   console.log(this.companyInfor);
  //   let lat = this.companyInfor.lat;
  //   let lng = this.companyInfor.lng;
  //   this.businessName = this.companyInfor.name;
  //   this.businessEmail= this.companyInfor.email;
  //   this.businessPhone = this.companyInfor.phone;
  //   this.businessTel = this.companyInfor.tel;
  //   this.businessOwner= this.companyInfor.owner;
  //   console.log(this.businessTel);
    

  //   this.streetName2 = geoArr[0].streetName;
  //   console.log(this.streetName2);
  //   this.areaName2 = geoArr[0].areaName;
  //   console.log(this.areaName2)
  //   this.areaLocation2 = geoArr[0].areaLocation;
  //   console.log(this.areaLocation2)
  //   this.postCode2 = geoArr[0].postCode;
  //   console.log(this.postCode2)

  //   this.initMap(lat,lng);
  //   loader.dismiss();
    
  // }

  // initMap(lat,lng){
   
  //   let mapOptions: google.maps.MapOptions = {
  //     center: {lat:123,lng:3453},
  //     zoom: 20,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
  //  // this.map = new google.maps.Map(mapOptions);

  // this.map = new google.maps.Map(document.getElementById('map'), {
  //   center: {lat: -34.397, lng: 150.644},
  //   zoom: 6
  // });

  // console.log(this.map);

  // }
  // dismiss() {
  //   const loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 2000
  //   });
  //   loader.present();
  //   this.navCtrl.pop().then(()=>{
  //     this.navCtrl.setRoot(HomePage,{map:this.map})
      
  //     loader.dismiss(); 
  //   });
    
    
  // }

}
