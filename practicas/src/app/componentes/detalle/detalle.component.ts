import { Component, OnInit, Input } from '@angular/core';
//Importamos el servicio que contiene el método de consultar detalle
import { Personajes} from 'src/app/services/personajes';
//Importamos la estructura de datos de Detalle
import { RespuestaDetalle } from '../../interfaces/interfaces';
import { personajesFirebase } from '../../interfaces/interfaces';
import { InfGeneral } from '../../interfaces/interfaces';
//Importamos el controlador de la ventana modal
import { ModalController } from '@ionic/angular';

@Component({
  standalone:false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {
  //Generamos un input para cecibir el id
   @Input() id:any;
   //Declaramos los objetos que almacenarán el detalle recuperado
   detallePersonaje ={} as personajesFirebase;

//Creamos el objeto de control de la ventana modal
    

  constructor( private detalle:Personajes, private modalCtrl: ModalController) { }
//Método encargado de cerrar la ventana modal
    regresar() {
      this.modalCtrl.dismiss();
    }

  ngOnInit() {
 
 
    this.detalle.getPersonajesDetalle(this.id).subscribe(respuesta => {
    this.detallePersonaje=<personajesFirebase>respuesta;
    });

  }

}
