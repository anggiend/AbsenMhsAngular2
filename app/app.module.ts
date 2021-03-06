import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { HomeComponent }    from './home/home.component';
import { RekapComponent }    from './rekap/rekap.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AppComponent,
    RekapComponent,
  ],
   providers: [
  ],
  
  bootstrap: [ AppComponent ]
})



export class AppModule { }
