import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { MenuController } from '@ionic/angular'; 
import { DataService } from '../../services/data.service'; 
import { Observable } from 'rxjs'; 
//crear una interface para definir propiedades que el componente lista va

interface Componente {
icon: string;
name: string;
redirectTo: string;
}
@Component({
selector: 'app-inicio',
templateUrl: './inicio.page.html',
styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//crear nuevo listado
//componentes: any[] = [];
componentes: Observable <Componente[]>; 
constructor(private menuCtrl: MenuController) { } 
 
  ngOnInit() { 
  } 
  mostrarMenu() { 
    this.menuCtrl.open('first'); 
  } 
 
} 