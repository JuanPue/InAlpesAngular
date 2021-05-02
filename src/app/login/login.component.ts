import { Usuario } from 'src/app/classes/usuario';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:Usuario[];
  credenciales={
    correo:'',
    clave:'',
    confirm:''
  };
  errorusuario='';
  constructor(private ususervice:UsuarioServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    options:{
      withCredentials:true
    }
    try {
      this.ususervice.Login(this.credenciales.correo, this.credenciales.clave).subscribe((response: Usuario[])=>{
        if(response==null){
          this.errorusuario='Usuario y/o Contraseña incorrecta';
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o Contraseña incorrectos!',
            footer: 'Si el problema persiste, Comunicate con un administrador.'
          })
        }else{;
          console.log(this.usuarios);
          localStorage.setItem("session",JSON.stringify(this.usuarios));
          this.router.navigate(['inicio']);}
      }
      )
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error, pero no es tu culpa!, Comunicate con un administrador.',
        footer: error
      })
    }

  }

}
