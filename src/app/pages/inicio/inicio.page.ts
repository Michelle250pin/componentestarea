import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
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
componentes: Componente[] = [
    { 
        icon: 'american-football-outline', 
        name: 'Action Sheet', 
        redirectTo: '/action-sheet' 
      }, 
      { 
        icon: 'alert-circle-outline', 
        name: 'Alert', 
        redirectTo: '/alert' 
      }, 
      { 
        icon: 'body-outline', 
        name: 'Avatar', 
        redirectTo: '/avatar' 
      }, 
      { 
        icon: 'calendar-number-outline', 
        name: 'Datetime', 
        redirectTo: '/datetime' 
      }, 
      { 
        icon: 'pencil-outline', 
        name: 'Input', 
        redirectTo: '/input' 
      }, 



      
      

];
constructor() { }
ngOnInit() {
}   


}