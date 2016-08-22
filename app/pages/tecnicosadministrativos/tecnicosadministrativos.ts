import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TecnicosAdministrativos } from '../../providers/tecnicos-administrativos/tecnicos-administrativos';
import { OrderBy } from '../../pipes/OrderBy';
/*
  Generated class for the TecnicosadministrativosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tecnicosadministrativos/tecnicosadministrativos.html',
  providers: [TecnicosAdministrativos],
  pipes: [OrderBy]
})
export class TecnicosadministrativosPage {

  public ordenacao: string = '+tit';
  public dados: Array<{tit: string, fem: number, masc: number}>;
  public config:string = '+';

  constructor(private nav: NavController, public tecnicosAdministrativos: TecnicosAdministrativos, public params: NavParams) {


    // console.log("config: "+ this.config);


    // Verifica se ordena a lista
    if (this.params.get('order')) {
      // console.log("definido");
      this.ordenacao = this.params.get('order');
    }

    // console.log("ordenacao="+this.ordenacao);
    // console.log("order="+this.params.get('order'));

  	this.loadDadosTAE();
  }

  loadDadosTAE() {
  	  this.tecnicosAdministrativos.load().then(data => {
  		this.dados = data.dados;
  	});
  }



  mudarOrderBy(param) {
    // montar a logica, verificar se param = ordenacao. caso sim troca o sinal de + por -
    // verificar antes se ordenacao ta preenchido. se tiver compara pra trocar senao atribui.
    param = param.replace('+' , '-');
    this.ordenacao = param;
    // console.log("mudarOrderBy: "+param);
    // this.nav.setRoot(TecnicosadministrativosPage);
    this.nav.setRoot(TecnicosadministrativosPage, {
      order: param
    });
  }

}
