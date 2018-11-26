import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { MapsProvider } from '../../providers/maps/maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  geoposition: any;
  constructor( public navCtrl: NavController, private maps: MapsProvider) {
    
  } 

  ionViewDidLoad(){
  }


}
