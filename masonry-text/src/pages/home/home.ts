import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public masList=[];
  
  constructor(public navCtrl: NavController) {
    for(let i=0; i<10; i++){

      this.masList.push('0'+i+'.jpeg')

    }
  }
  Masonry: any; //outer scope
  ionViewDidEnter() {
    setTimeout(() => {
    var elem = document.querySelector('.grid');
    var msnry = new Masonry(elem, {
    // options
    itemSelector: '.grid-item',
    fitWidth: true
    });
    }, 100);
    }
}
