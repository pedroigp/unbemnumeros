import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DocenteRegimeTrabalho } from '../../providers/docente-regime-trabalho/docente-regime-trabalho';

/*
  Generated class for the RegimetrabalhoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/regimetrabalho/regimetrabalho.html',
  providers: [DocenteRegimeTrabalho]
})
export class RegimetrabalhoPage {

  public regime: any;	

  constructor(private nav: NavController, public regimeTrabalho: DocenteRegimeTrabalho) {
  	this.loadRegime();
  }

  loadRegime() {
  	this.regimeTrabalho.load().then(data => {
  		this.regime = data;
  	});
  }

}
