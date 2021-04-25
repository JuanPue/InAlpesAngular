import { Inmueble } from "./inmueble";

export class Usuario {
  id: number;
  nombre: String;
  identificacion: String;
  apellido: String;
  telefono: String;
  correo: String;
  tipo_Usuario: String;
  clave: String;
  estado: String;
  tipo_documento: String;
  fecha_nacimiento: String;
  ciudad: String;
  oficina: String;
  preferencias: String;
  recibir_novedades: String;
  recibir_notificaciones: String;
  inmuebles:Inmueble[];
}


//Para generar nuevas clases usen: ng g class classes/nombre
