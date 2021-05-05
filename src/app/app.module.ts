
import { InmuebleServiceService } from './services/inmueble-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultageneralComponent } from './components/inmueble/consultageneral/consultageneral.component';
import { SinglelistingComponent } from './components/inmueble/singlelisting/singlelisting.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './components/inmueble/inicio/inicio.component';
import { NavbarComponent } from './plantillas/navbar/navbar.component';
import { FooterComponent } from './plantillas/footer/footer.component'
import { interceptorProvider } from './login/interceptors/interceptor.service';
import { RegistroComponent } from './login/registro/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultageneralComponent,
    SinglelistingComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
