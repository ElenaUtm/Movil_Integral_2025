import { Component } from '@angular/core';

//Estructura de cada elemento de la lista
interface Elemento{
  icono: string;
  nombre:string;
  ruta:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  //Lista de nombre elementos cuyo tipo de dato es la interfaz creada anteriormente
  elementos: Elemento[]=[
    { //Primer elemento de la lista
      icono: 'newspaper-outline',
      nombre:'Noticias',
      ruta:'/noticias'
    },
     { //Primer elemento de la lista
      icono: 'person-circle-outline',
      nombre:'Nosotros',
      ruta:'/nosotros'
    },
    { //Primer elemento de la lista
      icono: 'cog-outline',
      nombre:'Componentes',
      ruta:'/componentes'
    },
  ];
  constructor() {}
}
