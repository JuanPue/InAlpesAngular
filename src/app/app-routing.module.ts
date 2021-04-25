import { SinglelistingComponent } from './components/inmueble/singlelisting/singlelisting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultageneralComponent } from './components/inmueble/consultageneral/consultageneral.component';


const routes: Routes = [
  {path:'consultageneral', component:ConsultageneralComponent},
  {path:'',redirectTo:'consultageneral',pathMatch:'full'},
  {path:'singelisting/:id', component:SinglelistingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
