import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav, NavController,NavParams } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { InicioPage } from './pages/inicio/inicio'; 
import { InfraestruturaPage } from './pages/infraestrutura/infraestrutura';
import { PublicacaoPage } from './pages/publicacao/publicacao';
import { TecnicosadministrativosPage } from './pages/tecnicosadministrativos/tecnicosadministrativos';
import { TitulacaoPage } from './pages/titulacao/titulacao';
import { RegimetrabalhoPage } from './pages/regimetrabalho/regimetrabalho';
import { FaculdadesPage } from './pages/faculdades/faculdades';
import { PosgraduacaoPage } from './pages/posgraduacao/posgraduacao';
import { DadosfinanceirosPage } from './pages/dadosfinanceiros/dadosfinanceiros';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pagesInicio: Array<{title: string, icon: string, component: any}>;
  pagesDadosGlobais: Array<{title: string, icon: string, component: any}>;
  pagesDocentes: Array<{title: string, icon: string, component: any}>;
  pagesFaculdades: Array<{title: string, icon: string, component: any}>;
  pagesDadosFinanceiros: Array<{title: string, icon: string, component: any}>;
  menuPrincipal: Array<{menu: string, opcoes: any}>;

  constructor(private platform: Platform) {
    this.initializeApp();
    
    this.pagesInicio = [
      { title: 'Inicio', icon: 'home', component: InicioPage }
    ];

    this.pagesDadosGlobais = [
      { title: 'Técnicos-Administrativos', icon: 'people', component: TecnicosadministrativosPage }
    ];    

    this.pagesDocentes = [
      { title: 'Titulação', icon: 'ribbon', component: TitulacaoPage },
      { title: 'Regime de Trabalho', icon: 'clock', component: RegimetrabalhoPage }
    ]; 

    this.pagesFaculdades = [
      { title: 'Graduação', icon: 'school', component: FaculdadesPage },
      // { title: 'Pós-Graduação', icon: 'school', component: FaculdadesPage },
      { title: 'Mestrado', icon: 'school', component: FaculdadesPage },
      { title: 'Doutorado', icon: 'school', component: FaculdadesPage }
    ];       
    
    this.pagesDadosFinanceiros = [
      { title: 'Receitas / Despesas', icon: 'cash', component: DadosfinanceirosPage }
    ];

    this.menuPrincipal = [
      { menu: '', opcoes: this.pagesInicio },
      { menu: 'Dados Globais', opcoes: this.pagesDadosGlobais },
      { menu: 'Docentes', opcoes: this.pagesDocentes },
      { menu: 'Dados Instituidos/ Faculdades', opcoes: this.pagesFaculdades },
      { menu: 'Dados Financeiros', opcoes: this.pagesDadosFinanceiros }
    ];      
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  openPageParam(page) {
    this.nav.setRoot(page.component, {
      pagina: page.title
    });
  }    
}

ionicBootstrap(MyApp, [], {
prodMode: false
});