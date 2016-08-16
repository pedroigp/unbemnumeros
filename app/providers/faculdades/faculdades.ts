import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Faculdades {
  data: any;
  totalMatriculados: number;
  totalFormados: number;
  totalIngressantes: number;

  dadosGraduacao: string = './data/faculdades/graduacao.json';
  dadosPos: string = './data/faculdades/posgraduacao.json';;
  dadosMestrado: string = './data/faculdades/mestrado.json';;
  dadosDoutorado: string = './data/faculdades/doutorado.json';;

  constructor(private http: Http) {
    this.data = null;
  }

  load(tipoPesquisa) {
    this.data = null;
    
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.baseDados(tipoPesquisa))
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          this.calcularTotais();
          resolve(this.data);          
        });
    });
  }

  baseDados(tipoPesquisa) {

      switch (tipoPesquisa) {        
        case 'Mestrado':
          return this.dadosMestrado;
        case 'Doutorado':
          return this.dadosDoutorado;
        default:
          return this.dadosGraduacao;
      }
      
  }

  calcularTotais() {
      this.totalMatriculados = 0;
      this.totalFormados = 0;
      this.totalIngressantes = 0;
    for(let i = 0; i < this.data.dados.length; i++) {     
      this.totalMatriculados = this.totalMatriculados + this.data.dados[i].mat;
      this.totalFormados = this.totalFormados + this.data.dados[i].for;
      this.totalIngressantes = this.totalIngressantes + this.data.dados[i].ing;
    }  
  }  

}