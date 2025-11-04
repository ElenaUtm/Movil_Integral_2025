import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaBD, } from '../interfaces/interfaces';
import { RespuestaDetalle } from '../interfaces/interfaces';

////Importamos
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class Personajes{


  //Declaramos el objeto firestore con acceso a la BD
  constructor(private http:HttpClient, private firestore:Firestore) { }
   
  getDatosRealtime(){

     return this.http.get<RespuestaBD>('https://juego9nos-f1e1c-default-rtdb.firebaseio.com/.json');
  }
getDetalleRealtime( id: string ) { 
    return this.http.get<RespuestaDetalle>('');
  }

  
  getDatos(){
     return this.http.get<RespuestaBD>('https://reqres.in/api/users',{headers:{'x-api-key':'reqres-free-v1'}});
  }

   //Método encargado de recuperar los datos de un personaje
  getDetalle( id: number ) { 
    return this.http.get<RespuestaDetalle>("https://reqres.in/api/users/"+id,{headers:{'x-api-key':'reqres-free-v1'}});
  }

   getPersonajes(){
    //Consulta a la colección, lo que nos regresa un objeto de referencia
     const personajesRef=collection(this.firestore, 'personajes');
     //Retornamos los datos del objeto de referencia
     return collectionData(personajesRef,{ idField: 'id' });
     /*NOTA: El id de los documentos no se retorna por default, 
     es necesario solicitarlo */
     
   }

   getPersonajesDetalle(id:string){
    const personajeRef = doc(this.firestore, `personajes/${id}`);
    return docData(personajeRef);
   
  }

  //  getPersonajes() {
  //   const col = collection(this.fire, 'comentarios');
  //   console.log(col );
  //   // return collectionData(col, { idField: 'id' }) as Observable<any[]>;
  
//}

// autenticar(email: string, password: string) {
  
//     this.afAuth['signInWithEmailAndPassword'](email, password)
//       .then((result:any) => {
//         console.log("Inicio de sesión exitoso " + result.user?.email);
//       }).catch((error: any) => {
//         console.error("Error al iniciar sesión", error);
//       });
//   }
}



