
import { InmuebleServiceService } from './services/inmueble-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultageneralComponent } from './components/inmueble/consultageneral/consultageneral.component';
import { SinglelistingComponent } from './components/inmueble/singlelisting/singlelisting.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AppComponent,
    ConsultageneralComponent,
    SinglelistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [InmuebleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
