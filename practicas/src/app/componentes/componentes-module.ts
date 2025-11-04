import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Vinculamos al módulo el componente Header
import { HeaderComponent } from './header/header.component';
/*Importamos la librería para reconocer las etiquetas ion
que serán utilizadas en el header*/
import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  //Declaramos el HeaderComponent
  declarations: [ HeaderComponent, DetalleComponent],
  //Esportamos para su utilización
  exports:[HeaderComponent,DetalleComponent],
  imports: [
    CommonModule,
    //Importamos el uso de IonicModule
    IonicModule
  ]

})
export class ComponentesModule { }
