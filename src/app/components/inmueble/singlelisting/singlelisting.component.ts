import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmueble } from 'src/app/classes/inmueble';
import { InmuebleServiceService } from 'src/app/services/inmueble-service.service';

@Component({
  selector: 'app-singlelisting',
  templateUrl: './singlelisting.component.html',
  styleUrls: ['./singlelisting.component.css']
})
export class SinglelistingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `assets/img/bg-img/hero4.jpg`);
  id:number;
  inmuebles:Inmueble[];
  constructor(private activatedroute:ActivatedRoute, private router:Router, private inmuebleService:InmuebleServiceService) {
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
}
