import { Component, OnInit } from '@angular/core';
import { Detalle } from '../../interfaces/interfaces';

@Component({
  standalone:false,
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
textoBuscar="";
  constructor() { }

  buscar(event:any){
    console.log(event);
    const valor =event.detail.value;

  }
  ngOnInit() {
  }

}
