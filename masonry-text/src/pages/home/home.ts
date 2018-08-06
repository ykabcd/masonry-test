import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public masList=[];
  public Masonry: any;
  public msnry: any;
 
  constructor(public navCtrl: NavController) {
    for(let i=0; i<10; i++){

      this.masList.push('0'+i+'.jpeg')

    }
  }
  
  ionViewDidEnter() {
    let instance = this;
    setTimeout(() => {
    
    let elem = document.querySelector('.grid');
    imagesLoaded(elem, function () {})
      // all images loaded
      //  instance.utils.debug("images loaded done, instantiating packery");
    instance.msnry = new Masonry(elem, {
         // options
         itemSelector: '.grid-item',
         percentPosition: true,  
       });
      
    }, 100);
}
}