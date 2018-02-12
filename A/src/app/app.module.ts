import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { AppRoutingModule,routingComponent } from "./app-routing.module";
import { ConfigService } from './shared/utils/config.service';


@NgModule({
  declarations: routingComponent,
  imports: [BrowserModule,AppRoutingModule,HttpModule,FormsModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
