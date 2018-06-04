import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContinentePage } from '../continente/continente';
import { PaisProvider } from '../../providers/pais/pais';

/**
 * Generated class for the PaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pais',
  templateUrl: 'pais.html',
  providers: [
    PaisProvider
  ]
})
export class PaisPage {
  public items = Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, public paisProvider : PaisProvider) {
    this.initializeItems();
  }

  initializeItems() {
      this.paisProvider.getPaises().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.items = objeto_retorno;
          console.log(objeto_retorno)
        }, error => {
          console.log(error)
        }
      )
    console.log('ionViewDidLoad MoviesPage');
  }

  getItems(ev) {
    // Reset items back to all of the items

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.region.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else{
      this.initializeItems();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }

}
