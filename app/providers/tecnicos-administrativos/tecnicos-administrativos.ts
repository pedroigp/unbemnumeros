import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TecnicosAdministrativos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TecnicosAdministrativos {
  data: any;
  totalM: number;
  totalF: number;
  constructor(private http: Http) {
    this.data = null;
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('./data/dadosglobais/tecnicosadministrativos.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
          this.calcularTotais();
        });
    });    
  }

  calcularTotais() {
      this.totalM = 0;
      this.totalF = 0;
    for(let i = 0; i < this.data.dados.length; i++) {
      this.totalM = this.totalM + this.data.dados[i].masc;
      this.totalF = this.totalF + this.data.dados[i].fem;
    }  
  }
}

