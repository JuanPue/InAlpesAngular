import Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { TokenService } from 'src/app/login/services/token.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  correo:string;
  roles:string[];
  usuarios:Usuario[];
  usuarios2:Usuario[];
  rol:string="user";

  constructor(private usuarioService:UsuarioServiceService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.correo=this.tokenService.getCorreo();
    this.roles=this.tokenService.getAuthorities();
    console.log(this.correo);

    if(this.roles.includes('ROLE_ADMIN')){
      this.rol = 'admin';
    } else if (this.roles.includes('ROLE_COMERCIAL')) {
      this.rol = 'comercial';
    }
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(data=>{
      this.usuarios=data;
      this.usuarios2=data;
      console.log(this.usuarios)
    })
  }

  inactivarUsuario(id:number){
    this.usuarioService.eliminarUsuario(id).subscribe(data=>{
      Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        confirmButtonText: `OK`,
        text: '¡Hemos eliminado el usuario!'
      }).then((result) =>{
        if(result.isConfirmed){
          window.location.reload()
        }
      })
    }, err=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error, intenta nuevamente',
        footer: 'Si el problema persiste, Comunicate con un administrador.'
      })
    });
  }

  search(key: string):void{
    console.log(this.usuarios)
    console.log(key);
    const results: Usuario[] = [];
    for (const usuario of this.usuarios){
      if(usuario.nombre.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      usuario.apellido.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      usuario.correo.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      usuario.estado.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      usuario.identificacion.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
      usuario.telefono.toLowerCase().indexOf(key.toLowerCase()) !== -1 ){
        results.push(usuario);
      }
    }
    this.usuarios = results;
    if(results.length === 0  || !key){
      this.usuarios=this.usuarios2;
    }
  }
}
