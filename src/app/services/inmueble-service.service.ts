import { Inmueble } from './../classes/inmueble';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

//los servicios están divididos por modulo para tener más orden
//Revisen los Observable:<Inmueble[]> de los metodos y la manera en la que se retorna "this.http.post<Inmueble[]>", por si necesitan agregar metodos
//Para Agregar servicios ng g s services/nombreService

@Injectable({
  providedIn: 'root'
})
export class InmuebleServiceService {

  constructor(private http:HttpClient) { }

  Url = "http://localhost:8080/inalpes/api";

  getInmuebles():Observable<Inmueble[]>{
    return this.http.get<Inmueble[]>(this.Url+'/Inmuebles');
  }

  insertInmueble(inmueble:Inmueble):Observable<Inmueble[]>{
    return this.http.post<Inmueble[]>(this.Url+"/Inmuebles", inmueble);
  }

  getInmuebleId(id:number):Observable<Inmueble[]>{
    return this.http.get<Inmueble[]>(this.Url+"/Inmuebles/"+id)
  }

  editInmueble(inmueble:Inmueble):Observable<Inmueble[]>{
    return this.http.put<Inmueble[]>(this.Url+"/Inmuebles/"+inmueble.id, inmueble)
  }

  deleteInmueble(inmueble:Inmueble):Observable<Inmueble[]>{
    return this.http.put<Inmueble[]>(this.Url+"/Inmuebles/"+inmueble.id, inmueble)
  }

  getInmueblesActivos():Observable<Inmueble[]>{
    return this.http.get<Inmueble[]>(this.Url+"/InmueblesA");
  }

}
