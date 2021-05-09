import { GuardService as guard } from './login/guards/guard.service';
import { SinglelistingComponent } from './components/inmueble/singlelisting/singlelisting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultageneralComponent } from './components/inmueble/consultageneral/consultageneral.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './components/inmueble/inicio/inicio.component';
import { RegistroComponent } from './login/registro/registro/registro.component';
import { InmueblesComponent } from './components/inmueble/inmuebles/inmuebles.component';

const routes: Routes = [
  {path:'consultageneral', component:ConsultageneralComponent},
  {path:'',redirectTo:'consultageneral',pathMatch:'full'},
  {path:'singelisting/:id', component:SinglelistingComponent},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'inicio', component:InicioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'inmuebles',component:InmueblesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user','comercial'] }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
