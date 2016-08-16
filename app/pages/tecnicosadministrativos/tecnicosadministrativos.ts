import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TecnicosAdministrativos } from '../../providers/tecnicos-administrativos/tecnicos-administrativos';
/*
  Generated class for the TecnicosadministrativosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tecnicosadministrativos/tecnicosadministrativos.html',
  providers: [TecnicosAdministrativos]
})
export class TecnicosadministrativosPage {

	public dados: any;
  constructor(private nav: NavController, public tecnicosAdministrativos: TecnicosAdministrativos) {
  	this.loadDadosTAE();
  }

  loadDadosTAE() {
  	this.tecnicosAdministrativos.load().then(data => {
  		this.dados = data.dados;  		
  	});
  }  

}
