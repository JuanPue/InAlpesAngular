import Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Inmueble } from 'src/app/classes/inmueble';
import { Usuario } from 'src/app/classes/usuario';
import { TokenService } from 'src/app/login/services/token.service';
import { InmuebleServiceService } from 'src/app/services/inmueble-service.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styleUrls: ['./inmuebles.component.css']
})
export class InmueblesComponent implements OnInit {

  id:number;
  rol:string="user";
  roles:string[];
  usuario:Usuario[];
  inmuebles:Inmueble[];
  correo:string;
  constructor(private usuarioService:UsuarioServiceService, private tokenService:TokenService, private inmuebleService:InmuebleServiceService) { }

  ngOnInit(): void {
    this.correo=this.tokenService.getCorreo();
    this.roles=this.tokenService.getAuthorities();
    console.log(this.correo);

    if(this.roles.includes('ROLE_ADMIN')){
      this.rol = 'admin';
    } else if (this.roles.includes('ROLE_COMERCIAL')) {
      this.rol = 'comercial';
    }
    this.getUsuarioco(this.correo);
  }

  getUsuarioco(correo:string){
    if(this.rol=="user"){
    this.usuarioService.getUsuarioCo(correo).subscribe(response =>{
      this.usuario= response;
      this.inmuebles = this.usuario[0].inmueble;

      const results: Inmueble[] = [];
      for (const inmueble of this.inmuebles){
        if(inmueble.estado.toLowerCase() == "activo"){
          results.push(inmueble);
        }
      }
      this.inmuebles = results;
      console.log(this.inmuebles)
    })
  }  else {
    this.inmuebleService.getInmuebles().subscribe(response =>{
      this.inmuebles = response;
      console.log(this.inmuebles);
    })
  }
  }

  inactivarInmueble(id:number){
    this.inmuebleService.deleteInmueble(id).subscribe(data =>{
      Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        confirmButtonText: `OK`,
        text: '¡Hemos eliminado el inmueble!'
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
}