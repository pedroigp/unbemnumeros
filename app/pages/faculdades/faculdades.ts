import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Faculdades } from '../../providers/faculdades/faculdades';

/*
  Generated class for the GraduacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/faculdades/faculdades.html',
  providers: [Faculdades]  
})
export class FaculdadesPage {

  public dadosFaculdade: any;
  public tituloPagina: string;

  constructor(private nav: NavController, public faculdades: Faculdades, public params: NavParams) {
  	this.loadGraduacao();
    this.tituloPagina = this.params.get('pagina');
  }

  loadGraduacao() {
  	this.faculdades.load(this.params.get('pagina')).then(data => {
  		this.dadosFaculdade = data.dados;      
  	});
  }  

}
