import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Directivas y otras cosas';
  mensaje = "mensaje con el unico fin de seguir el tutorial"
  registro= false
  nombre:string=""
  apellido:string=""
  entradas:object[];

  constructor(){
    this.entradas= [

      {title:"un titulo",
        name: "hola"
      },
      {title:"un titulo5"},
      {title:"un titulo2"},
      {title:"un titulo3"},
      {title:"un titulo4"},
    ]
  }


  registroUsuario(){

    this.registro = true
    this.mensaje="usuario registrado con exito";
  }
}
