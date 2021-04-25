
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmueble } from 'src/app/classes/inmueble';
import { InmuebleServiceService } from 'src/app/services/inmueble-service.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { Usuario } from 'src/app/classes/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-singlelisting',
  templateUrl: './singlelisting.component.html',
  styleUrls: ['./singlelisting.component.css']
})
export class SinglelistingComponent implements OnInit {
  images:any[]=[{
    img:'assets/img/bg-img/hero4.jpg'
  },
  {
    img:'assets/img/bg-img/hero5.jpg'
  }
];
  id:number;
  inmuebles:Inmueble[];
  usuarios:Usuario[];
  constructor(private activatedroute:ActivatedRoute, private router:Router, private inmuebleService:InmuebleServiceService, private configcar:NgbCarouselConfig, private usuarioService:UsuarioServiceService) {
    this.activatedroute.params.subscribe(data => {
      this.id = data.id;
    })
   }

  ngOnInit(): void {
    console.log(this.id);
    this.getInmuebles(this.id);
  }

  getInmuebles(id:number):void{
    this.inmuebleService.getInmuebleId(id).subscribe(response=>{
      this.inmuebles = response;
      console.log(this.inmuebles);
    })
  }

  getUsuarioid(id:number){
    this.usuarioService.usuarioInmueble(id).subscribe(data=>{
      this.usuarios= data;
      console.log(this.usuarios);
    })
  }
}
