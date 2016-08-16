import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosFinanceiros } from '../../providers/dados-financeiros/dados-financeiros';

/*
  Generated class for the DadosfinanceirosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dadosfinanceiros/dadosfinanceiros.html',
  providers: [DadosFinanceiros]
})
export class DadosfinanceirosPage {

	public receitas: any;
	public despesas: any;
	
  constructor(private nav: NavController, public dadosFinanceiros: DadosFinanceiros) {
  	this.loadDadosFinanceiros();
  }

  loadDadosFinanceiros() {
  	this.dadosFinanceiros.load().then(data => {
  		this.receitas = data.receitas;
  		this.despesas = data.despesas;
  	});
  }  

}