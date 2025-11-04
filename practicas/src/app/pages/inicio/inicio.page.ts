import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/services/personajes';
import { RespuestaBD } from '../../interfaces/interfaces';
import { Personajes as PersonajesaPI } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';

import {personajesFirebase} from '../../interfaces/interfaces';
import { collection, query, where, getDocs } from "firebase/firestore";

@Component({
  standalone:false,
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  personajes:personajesFirebase[]=[];

  constructor(private servicioPersonajes:Personajes,  private modalCtrl:ModalController
  ) { }

   /*Generamos el método que se ejecuta al dar clic sobre una tarjeta de personaje*/
    async verDetalle(id: string){
    
     /*Dado que es una petición (promesa) es un proceso
     asincrono espera la respuesta del componente modal
     al recibirla se vincula con la vista de detalle */
      const modal= await this.modalCtrl.create({
        component:DetalleComponent,
        componentProps:{id}
      });
     //Se visualisa el componente de detalle
      modal.present();
    }
    
   
  
  ngOnInit() {
    //Realizamos la llamada a la función getPersonajes
    this.servicioPersonajes.getPersonajes().subscribe((respuesta)=>{
      respuesta.forEach(personaje=>{
        //Almacenamos cada personaje en el arreglo
         this.personajes.push(<personajesFirebase>personaje);
      });
      });
  }
}


