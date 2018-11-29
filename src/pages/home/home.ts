import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { MapsProvider } from '../../providers/maps/maps';
import { MoreInfoPage } from '../more-info/more-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController, private maps: MapsProvider) {
    
  } 

  ionViewDidLoad(){
  }

  MoreInfo=function(){
    this.navCtrl.push(MoreInfoPage)
  }
}
