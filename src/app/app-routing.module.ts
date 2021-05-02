import { SinglelistingComponent } from './components/inmueble/singlelisting/singlelisting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultageneralComponent } from './components/inmueble/consultageneral/consultageneral.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './components/inmueble/inicio/inicio.component';


const routes: Routes = [
  {path:'consultageneral', component:ConsultageneralComponent},
  {path:'',redirectTo:'consultageneral',pathMatch:'full'},
  {path:'singelisting/:id', component:SinglelistingComponent},
  {path:'login', component:LoginComponent},
  {path:'',component:InicioComponent},
  {path:'inicio', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
