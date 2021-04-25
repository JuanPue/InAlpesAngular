import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InmuebleServiceService } from 'src/app/services/inmueble-service.service';

@Component({
  selector: 'app-singlelisting',
  templateUrl: './singlelisting.component.html',
  styleUrls: ['./singlelisting.component.css']
})
export class SinglelistingComponent implements OnInit {

  id;
  constructor(private activatedroute:ActivatedRoute, private router:Router, private inmuebleService:InmuebleServiceService) {
    this.activatedroute.params.subscribe(data => {
      console.log(data);
      this.id = data;
      console.log(this.id);
    })
   }

  ngOnInit(): void {
    console.log(this.id);

  }

}
