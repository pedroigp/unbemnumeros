import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocenteTitulacao } from '../../providers/docente-titulacao/docente-titulacao';
/*
  Generated class for the TitulacaoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/titulacao/titulacao.html',
  providers: [DocenteTitulacao]
})
export class TitulacaoPage {

  public titulacao: any;

  constructor(private nav: NavController, public docenteTitulacao: DocenteTitulacao) {
  	this.loadTitulacao();
  }

  loadTitulacao() {
  	this.docenteTitulacao.load().then(data => {
  		this.titulacao = data;
  	});
  }
}
